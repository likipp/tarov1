import React, { useEffect, useState } from "react";
import Taro, { useDidHide, useDidShow } from "@tarojs/taro"
import { View, Text } from "@tarojs/components";
import { Sidebar, SidebarItem } from "@antmjs/vantui";

import "./index.less"

const Product = () => {
    // const [data] = props

    const [data, setData] = useState()
    const [activeKey, setActiveKey] = useState(0)
    const [title, setTitle] = useState("")

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
        <View style={{display: "flex", height: "900px"}}>
          <Sidebar activeKey={activeKey} 
            onChange={(event) => {
              setActiveKey(event.detail)
              // console.log(Object.keys(data), "对应的title")
              setTitle(data[event.detail].title)
              // console.log(data[event.detail].title, "数据")
            }}
            style={{width: "100px"}}
          >
            {
              data?.map((item) => {
                return <SidebarItem title={item.title} className={data[activeKey].title === item.title ? "myactive" : "myunactive"}/>
              })
            }
          </Sidebar>
          <View style={{backgroundColor: "#e8eaec", flex: 2}}>
            <View style={{height: "100px", marginLeft: "15px", marginTop: "20px", color: "#515a6e"}}>
              <Text style={{display: "block"}}>{title}</Text>
              <Text style={{display: "block"}}>共10个商品</Text>
            </View>
          </View>
        </View>
    )
}

export default Product