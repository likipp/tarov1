import React from "react";
import { View } from "@tarojs/components";
import { Image, Button } from "@antmjs/vantui";
import shoppingS from '../static/images/shoppingS.png'

import './index.less'

const ShoppingCart = () => {
    return (
        <View style={{
            overflow: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <View>
                <Image
                    // round={ true }
                    width={300}
                    height={300}
                    src={shoppingS}
                />
                {/* <Empty
                    class="customImage"
                    image="/pages/static/images/shoppingS.png"
                    description="购物车为空哦"
                /> */}
            </View>
            <View>
                <Button type="default">逛一逛</Button>
            </View>
        </View>
    )
}

export default ShoppingCart