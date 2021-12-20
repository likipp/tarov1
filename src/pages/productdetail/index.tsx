import React, { useEffect } from 'react'
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
const ProductDetail = (props) => {
    useEffect(() => {
        const id = props.tid.split('&')[0].split('=')[1]
        console.log(id, "id")
        Taro.request({
            url: `http://localhost:8080/api/v1/base/product/${id}`,
            method: "GET",
            success: (res) => {
                console.log(res.data, "res")
            //   setData(() => {
            //     // console.log(res.data.data.slice(0,3))
            //     return res.data.data
            //   })
              Taro.hideLoading()
            },
            fail: (err) => {
              console.log(err, "失败了")
            }
          })
    }, [])
    return (
        <View>
        商品详情
    </View>
    )
}

export default ProductDetail