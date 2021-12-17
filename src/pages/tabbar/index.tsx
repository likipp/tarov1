import React, { useState } from "react";
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
                }}
            >
                <TabbarItem icon="home-o">
                首页
                </TabbarItem>
                <TabbarItem icon="cart-o">
                    我的订单
                </TabbarItem>
            </Tabbar>
        </View>
    )
}

export default TabbarCompont