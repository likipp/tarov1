import React from "react";
import { View } from "@tarojs/components";
import { Image, Button } from "@antmjs/vantui"; 

const ShoppingCart = () => {
    return (
        <View style={{
            overflow: 'hidden',
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                round={ true }
                width="10rem"
                height="10rem"
                src="/pages/static/images/shoppingS.png"
            />
            <View style={{display: 'inline-block'}}>
                <Button type="default">默认按钮</Button>
            </View>
        </View>
    )
}

export default ShoppingCart