import React, { useEffect, useLayoutEffect, useState } from "react";
import Taro, { useDidHide, useDidShow } from "@tarojs/taro"
import { View, Text, ScrollView} from "@tarojs/components";
import { Sidebar, SidebarItem, Image, Icon, Button } from "@antmjs/vantui";

import ProductItem from "./component/productitem"

import "./index.less"

const Product = () => {
    // const [data] = props

    const [data, setData] = useState()
    const [activeKey, setActiveKey] = useState(0)
    const [title, setTitle] = useState("")
    const [list, setList] = useState()
    const [height, setHeight] = useState(0)
    const [disabled, setDisabled] = useState(true)
    const [length, setLength] = useState(0)
    const [params, setParams] = useState({title: "", key: 1})

    

    useEffect(() => {
      // 获取屏幕高度
        Taro.getSystemInfo({
          success: function (res) {
            setHeight(res.windowHeight)
          }
        })

        // Taro.request({
        //   url: "http://localhost:8080/api/v1/base/brand-tree/",
        //   method: "GET",
        //   success: (res) => {
        //     setData(() => {
        //       return res.data.data
        //     })
        //     setParams({title: res.data.data[0].title, brand: res.data.data[0].key})
        //     Taro.hideLoading()
        //   },
        //   fail: (err) => {
        //     console.log(err, "失败了")
        //   }
        // })

      }, [])

      useLayoutEffect(() => {
        Taro.request({
          url: "http://localhost:8080/api/v1/base/brand-tree/",
          method: "GET",
          success: (res) => {
            setData(() => {
              return res.data.data
            })
            setParams({title: res.data.data[0].title, key: res.data.data[0].key})
            Taro.hideLoading()
          },
          fail: (err) => {
            console.log(err, "失败了")
          }
        })
      }, [])

      useLayoutEffect(() => {
        if (data?.length > 0) {
          Object.keys(data).map(key => {
            if (title == data[key].title) {
              setParams({title: data[key].title, key: data[key].key})
            }
          })
        }
      }, [title])

      useLayoutEffect(() => {
        Taro.request({
          url: "http://localhost:8080/api/v1/base/product/",
          method: "GET",
          data: {
            brand: params.key
          },
          success: (res) => {
            // setData(() => {
            //   return res.data.data
            // })
            // setTitle(res.data.data[0].title)
            setList(() => {
                return res.data.data
              })
            Taro.hideLoading()
          },
          fail: (err) => {
            console.log(err, "失败了")
          }
        })
      }, [params])

    return (
        <View style={{display: "flex", marginBottom: "15px", flexDirection: "column"}}>
          <View style={{display: "flex"}}>
            <Sidebar activeKey={activeKey} 
              onChange={(event) => {
                setActiveKey(event.detail)
                setTitle(data[event.detail].title)
                // setParams({title: data[event.detail].title, brand: 2})
              }}
              style={{width: "100px", flex: "1 0 auto"}}
            >
              {
                data?.map((item) => {
                  return <SidebarItem title={item.title} className={data[activeKey].title === item.title ? "myactive" : "myunactive"}/>
                })
              }
            </Sidebar>
            <View style={{flex: "2 0 auto", backgroundColor: "#e8eaec"}}>
              <View style={{marginLeft: "10px", marginTop: "15px", color: "#515a6e", backgroundColor: "#e8eaec"}}>
                <View style={{marginBottom: "15px"}}>
                    <Text style={{display: "block"}}>{params.title}</Text>
                    <Text style={{display: "block"}}>共{list?.length}个商品</Text>
                </View>
                <View>
                  <ProductItem list={list} height={height} />
                </View>
              </View>
            </View>
          </View>
          <View style={{width: "100%", backgroundColor: "#fafafa", height: "100px", display:"flex", alignItems: "center", justifyContent:"space-between", borderTop: "1px solid #e8eaec", zIndex: 999, position: "fixed", bottom:0}}>
              {
                length ? <View>
                  <Text>0件商品，合价</Text>
                  <Text style={{fontSize: "25px", marginLeft: "5px", color: "#1296db"}}>¥0</Text>
                </View>
                : <View style={{color: "#bfbfbf"}}>未选购商品</View>
              }
              <Button color="#1296db" style="margin: 0 5px 0 0; width: 150px" disabled={disabled} onClick={() => {Taro.navigateTo({url: "/pages/playbill/component/payprocess"})}}>选好了</Button>
          </View>
        </View>
    )
}

export default Product