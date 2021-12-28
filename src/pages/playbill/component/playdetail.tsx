import React, {useState, useEffect, useReducer} from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Icon, Button, Image, Divider, Stepper } from "@antmjs/vantui";
import * as dayjs from 'dayjs'

import QuickBillReducer from '/src/reducer/index'

import ellipsis from "/src/pages/static/images/ellipsis.png"
import wechat from "/src/pages/static/images/wechat.png"

const PlayDetail = () => {
    const [data, setData] = useState()
    const [disabled, setDisabled] = useState(true)

    // const dataList = [
    //     {name: "百诺恩润唇膏一支", price: 3200, sell: 1, qty: 0},
    //     {name: "百诺恩润唇膏四支", price: 12800, sell: 0, qty: 1},
    //     {name: "运费", price: 10, sell: 1, qty: 0}
    // ]

    const [product, dispatch] = useReducer(QuickBillReducer, [
        {name: "百诺恩润唇膏一支", price: 3200, sell: 1, qty: 0},
        {name: "百诺恩润唇膏四支", price: 12800, sell: 0, qty: 0},
        {name: "运费", price: 10, sell: 1, qty: 0}
    ])

    const getTotal = (data) => {
        let total = 0
        data.map((item) => {
            if (item.qty > 0) {
                let t = item.price * item.qty
                total = total + t
            }
            return total
        })
    }

    const getLength = (data) => {
        let length = 0
        data.map((item) => {
            if (item.qty > 0) {
                length ++
            }
            return length
        })
    }

    useEffect(() => {
        console.log("223434")
        Taro.request({
          url: "http://localhost:8080/api/v1/base/product/",
          method: "GET",
          success: (res) => {
            setData(() => {
              // console.log(res.data.data.slice(0,3))
              return res.data.data
            })
            Taro.hideLoading()
          },
          fail: (err) => {
            console.log(err, "失败了")
          }
        })
      }, [])

    return (
        <View style={{margin: "0 15px"}}>
            <View style={{height: "30px", overflow: "hidden"}}>
                <Text style={{float: "left"}}>日常小店</Text>
                <View style={{float: "right"}}>
                    <Button style="border: none; height: 30px; padding: 0" plain={true} color="#808695"
                        onClick={() => {
                            Taro.switchTab({
                                url: "/pages/index/index"
                            })
                        }}
                    >
                        更多商品
                        <Icon name="arrow" />
                    </Button>
                </View>
            </View>
            <Divider />
            <View style={{clear: "both"}}>
                <Text style={{fontSize: '30px', display: "inline-block", marginBottom: "15px"}}>{dayjs().format('MM月DD日')}速购单</Text>
                <View style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                {/* style={{marginLeft: "18px", marginBottom: "18px"}} */}
                    <View style={{display: "flex", alignItems: "center"}}>
                        <Image
                            style={{zIndex: '80'}}
                            round={ true }
                            width={50}
                            height={50}
                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                        />
                        <Image
                            style={{zIndex: '100', position: "absolute", marginLeft: '18px'}}
                            round={ true }
                            width={50}
                            height={50}
                            src={ellipsis}
                        />
                        <Text style={{marginLeft: "25px"}}>已售1</Text>
                    </View>
                    <View>
                        <Button 
                            round={ true } 
                            size="small"
                            icon={wechat}
                            color="#07c160"
                            plain={ true }
                            // style="display: inline"
                        >分享
                        </Button>
                    </View>
                </View>
            </View>
            <View style={{margin: "15px 0"}}>
                <Text style={{color: '#808695'}}>支持快递寄送</Text>
            </View>
            {
                data ? <Image width={200}
                height={200} src={data[0].picture} style="marginBottom: 15px"/>
                : <></>
            }
            {
                
                product.map((item: any, index: number) => {
                    return (
                        <View style={{backgroundColor: "#e8eaec", borderRadius: "15px", display: "flex", alignItems: "center", flexWrap: "wrap", padding: "15px", marginBottom: "15px"}}>
                            <View style={{width: "50%", marginBottom: "15px"}}>{item.name}</View>
                            <View style={{width: "50%", display:"flex", justifyContent: "flex-end", marginBottom: "15px"}}>¥{item.price}</View>
                            <Text style={{width: "50%", color: "#808695"}}>已售 {item.sell}</Text>
                            {
                                item.qty == 0 ? <Icon name="add-o" style="width: 50%; display: flex; justifyContent: flex-end" color="#1296db" size="25px" onClick={() => {
                                    dispatch({type: "increament", index: index})
                                }} />
                                : <Stepper value={ item.qty } theme={"round"} buttonSize="20px" style={{width: "50%", display: "flex", justifyContent: "flex-end"}} min={0}
                                    onPlus={() => {
                                        dispatch({type: "increament", index: index})
                                    }}
                                    onMinus={() => {
                                        dispatch({type: "decrement", index: index})
                                    }}
                                />
                            }
                        </View>
                    )
                })
            }
            
            <View style={{display: "flex", alignItems: "center", justifyContent:"space-between", position: "absolute", bottom: "20px", width: "100%"}}>
               <View>
                <Text>{getLength(product)}件商品，合价</Text>
                <Text style={{fontSize: "25px", marginLeft: "5px", color: "#1296db"}}>¥{getTotal(product)}</Text>
               </View>
               <Button color="#1296db" style="margin: 0 30px 0 0; width: 150px" disabled={disabled}>选好了</Button>
           </View>
        </View>
    )
}

export default PlayDetail