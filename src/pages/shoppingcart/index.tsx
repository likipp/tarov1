import React, { useEffect, useState } from "react";
import Taro from "@tarojs/taro"
import { View, Text } from "@tarojs/components";
import { Image, Button } from "@antmjs/vantui";
import shoppingE from '../static/images/shoppingE.png'

import './index.less'

const ShoppingCart = () => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        Taro.getSystemInfo({
            success: (res) => {
                setHeight(res.windowHeight)
            }
        })
    })

    return (
        <View style={{
            height: height,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <View>
                <Image
                    width={300}
                    height={300}
                    src={shoppingE}
                />
            </View>
            <Text style={{color: "#bfbfbf", margin: "10px 0"}}>您的购物车为空哦</Text>
            <View>
                <Button color="#1296db" round={ true }>逛一逛</Button>
            </View>
        </View>
    )
}

export default ShoppingCart