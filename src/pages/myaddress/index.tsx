import React from "react"
import {View} from "@tarojs/components"
import {Divider, Icon} from "@antmjs/vantui"

const MyAddress = () => {
    const data = [{name: "张三", phone: "15869673764", addr: "浙江省温州市", default: true}, {name: "李四", phone: "15869670000", addr: "浙江省杭州市"}]

    return (
        <View style={{margin:"15px"}}>
            <View>
               {
                   data.map((item) => {
                    return (
                        <View>
                            <View style={{display: "flex"}}>
                                <View style={{flex: 2}}>
                                    <View style={{marginBottom: "5px"}}>
                                        <View style={{marginRight: "30px", display: "inline-flex"}}>{item.name}</View>
                                        <View style={{display: "inline-flex"}}>{item.phone}</View>
                                    </View>
                                    <View style={{color:"#bfbfbf"}}>{item.addr}</View>
                                </View>
                                {item.default ? <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}><Icon name="success" color="#19be6b" /></View> : null}
                            </View>
                            <Divider />
                        </View>
                    )
                })
               }
               <View>
               <View style={{color: "#69c0ff"}}>
                    <Icon name="add-o" style="marginRight: 5px" />添加地址
                </View>
               </View>
            </View>
        </View>
    )
}

export default MyAddress