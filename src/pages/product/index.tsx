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

    const [products, setProducts] = useState(
      [
        {
          title: "花喜",
          list: [{
            id: 1,
            mark: "",
            p_name: "花喜酵素",
            p_number: "HX0001",
            p_spec: "",
            picture: "http://127.0.0.1:8080/images/花喜/2018081709312590.jpg",
            purchase_price: 150,
            sale_price: 298,
            unit: 3,
            updateBy: "",
            updatedAt: "2021-11-25T08:25:21.656+08:00",
            ware_house: 2
          },
          {
            id: 5,
            mark: "",
            p_name: "古方湿清茶",
            p_number: "HX0002",
            p_spec: "",
            picture: "http://127.0.0.1:8080/images/花喜/2018081709322284.jpg",
            purchase_price: 150,
            sale_price: 398,
            unit: 3,
            updateBy: "",
            updatedAt: "2021-12-11T09:24:22.483+08:00",
            ware_house: 2,
          },
          {
            id: 6,
            mark: "",
            p_name: "花喜高纤谷物棒（烧烤味）",
            p_number: "HX0003",
            p_spec: "",
            picture: "http://127.0.0.1:8080/images/1/20211211152515.png",
            purchase_price: 30,
            sale_price: 60,
            unit: 3,
            updateBy: "",
            updatedAt: "2021-12-11T15:25:16.049+08:00",
            ware_house: 2,
          }
        ]
        },
        {
        title: "百诺恩",
        list: [{
          id: 1,
          p_name: "百诺恩面巾纸",
          p_number: "B00001",
          p_spec: "",
          picture: "/favicon.ico",
          purchase_price: 10,
          sale_price: 25,
          unit: 1,
          updateBy: "",
          updatedAt: "2021-11-25T08:27:01.888+08:00",
          ware_house: 3,
        },
        {
          id: 3,
          mark: "",
          p_name: "百诺恩阳光棉亲肌瞬干纸尿裤",
          p_number: "B00002",
          p_spec: "",
          picture: "/favicon.ico",
          purchase_price: 100,
          sale_price: 225,
          unit: 1,
          updateBy: "",
          updatedAt: "2021-11-27T14:15:24.203+08:00",
          ware_house: 3,
        }
        ]
      }
    ]
    )
      
    

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
                products?.map((item) => {
                  return <SidebarItem title={item.title} className={products[activeKey].title === item.title ? "myactive" : "myunactive"}/>
                })
              }
            </Sidebar>
            {
              products?.map((item) => {
                return (
                  <View style={{flex: "2 0 auto", backgroundColor: "#e8eaec"}}>
                    <View style={{marginLeft: "10px", marginTop: "15px", color: "#515a6e", backgroundColor: "#e8eaec"}}>
                      <View style={{marginBottom: "15px"}}>
                          <Text style={{display: "block"}}>{item.title}</Text>
                          <Text style={{display: "block"}}>共{item.list?.length}个商品</Text>
                      </View>
                      <View>
                        <ProductItem list={item.list} height={height} />
                      </View>
                    </View>
                </View>
              )
            })
          }
            {/* <View style={{flex: "2 0 auto", backgroundColor: "#e8eaec"}}>
              <View style={{marginLeft: "10px", marginTop: "15px", color: "#515a6e", backgroundColor: "#e8eaec"}}>
                <View style={{marginBottom: "15px"}}>
                    <Text style={{display: "block"}}>{params.title}</Text>
                    <Text style={{display: "block"}}>共{list?.length}个商品</Text>
                </View>
                <View>
                  <ProductItem list={list} height={height} />
                </View>
              </View>
            </View> */}
            
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