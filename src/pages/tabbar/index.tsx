import React, { useState } from "react";
import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Tabbar, TabbarItem } from "@antmjs/vantui"; 

const TabbarCompont = () => {
    const [active, setActive] = useState(0)
    return (
        <View>
            <Tabbar
                active={active}
                onChange={(detail) => {
                // console.log(detail, "detail")
                setActive(detail.detail as number)
                console.log(detail, "detail")
                let url: string
                if (detail.detail == 0) {
                    url = '/pages/index/index'
                }
                if (detail.detail == 1) {
                    url = '/pages/shoppingcart/index'
                }
                if (detail.detail == 2) {
                    url = '/pages/my/index'
                }

                console.log(url, "url")
                Taro.switchTab({
                    url: url
                })
                }}
            >
                <TabbarItem icon="home-o">
                首页
                </TabbarItem>
                <TabbarItem icon="cart-o">
                    购物车
                </TabbarItem>
                <TabbarItem icon="user-o">
                    我的
                </TabbarItem>
            </Tabbar>
        </View>
    )
}

export default TabbarCompont