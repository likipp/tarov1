import React, {useEffect, useLayoutEffect, useState} from "react"
import Taro from "@tarojs/taro";
import {View, Text} from "@tarojs/components"
import { Button, Icon, Field } from "@antmjs/vantui"

const PayProcess = () => {
   const [disabled, setDisabled] = useState(true)
   const [mark, setMark] = useState(true)


   useLayoutEffect(() => {
        
   }, [mark])
    
    return (
        <View style={{margin: "30px 15px 0px"}}>
            <Text style={{color: "#bfbfbf"}}>收货地址</Text>
            <View style={{height: "80px", backgroundColor: "#e6f7ff", display: "flex", justifyContent: "center", alignItems: "center", margin: "15px 0", color: "#434343"}}>
                <View onClick={() => {Taro.navigateTo({url: "/pages/address/index"})}}>
                    <Icon name="add" />请选择收货地址
                </View>
            </View>
            <Text style={{color: "#bfbfbf"}}>商品明细</Text>

            <View style={{marginTop: "15px"}}>
                {
                    mark ? <Text style={{color: "#69c0ff"}} onClick={() => {
                        console.log("点击了订单备注")
                        setMark(false)}}>添加订单备注</Text>
                    : (
                        <View>
                            <Text style={{color: "#bfbfbf"}}>订单备注</Text>
                            <Field placeholder="输入备注信息（非必填）" border={false} type="textarea" style="backgroundColor: #f5f5f5; marginTop: 15px"></Field>
                        </View>
                    )
                }
            </View>

            <View style={{display: "flex", alignItems: "center", justifyContent:"space-between", position: "absolute", bottom: "20px", width: "100%"}}>
               <View>
                <Text>{3}件商品，合价</Text>
                <Text style={{fontSize: "25px", marginLeft: "5px", color: "#1296db"}}>¥{500}</Text>
               </View>
               <Button color="#1296db" style="margin: 0 30px 0 0; width: 150px" disabled={disabled} >去付款</Button>
           </View>
        </View>
    )
}

export default PayProcess