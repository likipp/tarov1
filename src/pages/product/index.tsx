import React, { useEffect, useState } from "react";
import Taro, { useDidHide, useDidShow } from "@tarojs/taro"
import { View, Text } from "@tarojs/components";
import { Sidebar, SidebarItem, Image, Icon } from "@antmjs/vantui";

import ProductItem from "./component/productitem"

import "./index.less"

const Product = () => {
    // const [data] = props

    const [data, setData] = useState()
    const [activeKey, setActiveKey] = useState(0)
    const [title, setTitle] = useState("")
    const [list, setList] = useState()

    useEffect(() => {
      console.log("页面加载完")
        Taro.request({
          url: "http://localhost:8080/api/v1/base/brand-tree/",
          method: "GET",
          success: (res) => {
            setData(() => {
              return res.data.data
            })
            setTitle(res.data.data[0].title)
            Taro.hideLoading()
          },
          fail: (err) => {
            console.log(err, "失败了")
          }
        })
        Taro.request({
          url: "http://localhost:8080/api/v1/base/product/",
          method: "GET",
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
      }, [])

      // useDidShow(() => {
      //   console.log("页面加载完之前")
      //   Taro.request({
      //     url: "http://localhost:8080/api/v1/base/brand-tree/",
      //     method: "GET",
      //     success: (res) => {
      //       setData(() => {
      //         return res.data.data
      //       })
      //       Taro.hideLoading()
      //     },
      //     fail: (err) => {
      //       console.log(err, "失败了")
      //     }
      //   })
      // })
    return (
        <View style={{display: "flex", height: "900px", marginBottom: "15px"}}>
          <Sidebar activeKey={activeKey} 
            onChange={(event) => {
              setActiveKey(event.detail)
              setTitle(data[event.detail].title)
            }}
            style={{width: "100px"}}
          >
            {
              data?.map((item) => {
                return <SidebarItem title={item.title} className={data[activeKey].title === item.title ? "myactive" : "myunactive"}/>
              })
            }
          </Sidebar>
          {/* backgroundColor: "#e8eaec", */}
          <View style={{ flex: 2, backgroundColor: "#e8eaec"}}>
            <View style={{height: "100px", marginLeft: "15px", marginTop: "20px", color: "#515a6e"}}>
              <Text style={{display: "block"}}>{title}</Text>
              <Text style={{display: "block"}}>共10个商品</Text>
              <View>
                {
                  list?.length > 0 ? list.map((item) => {
                    // console.log(item, "item")
                    return (
                      <View style={{border: "1px solid #e8eaec", borderRadius: "10px", marginBottom: "20px", marginRight: "15px", backgroundColor: "white", overflow:"hidden"}} >
                          <Image
                            width={500}
                            height={500}
                            src={item.picture}
                            fit="none"
                            radius={25}
                          />
                          <View style={{height: "80px", margin: "25px 0 25px 25px", position: "relative"}}>
                          <Text style="zIndex: 1; color:red; bottom: 55px; position:absolute">
                              ¥
                              </Text>
                              <Text style="zIndex: 0; font-size: 30px; color: red; margin-left: 10px">
                              {item.sale_price}
                              </Text>
                              <Text style="display: block">
                                  {item.p_name}
                              </Text>
                              <View>
                              <Icon name="add" color="#ee0a24" size="25px" style="width: 26px; height: 26px; margin: 1px; position:absolute; right: 15px" onClick={() => {
                                    
                                }} />
                              </View>
                          </View>
                        
                        </View>
                    )
                  })
                  : <></>
                }
              </View>
            </View>
          </View>
        </View>
    )
}

export default Product