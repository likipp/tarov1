import React from "react";
import { View, Text } from "@tarojs/components";
import { Icon, Button, Image } from "@antmjs/vantui";
import * as dayjs from 'dayjs'

import ellipsis from 'src/pages/playbill/component/ellipsis.png'

const PlayDetail = () => {
    return (
        <View>
            <View>
                <Text style={{float: "left"}}>日常小店</Text>
                <Button style="border: none; display: inline; float: right; right: 10">
                        更多商品
                        <Icon name="arrow" />
                    </Button>
            </View>
            <Text style={{fontSize: '30px', display: "inline-block"}}>{dayjs().format('MM月DD日')}速购单</Text>
            <View style={{display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "18px", marginBottom: "18px"}}>
                    <Image
                        style={{zIndex: '80'}}
                        round={ true }
                        width={50}
                        height={50}
                        src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                    <Image
                        style={{zIndex: '100', position: "absolute", marginRight: '30px'}}
                        round={ true }
                        width={50}
                        height={50}
                        src={ellipsis}
                    />
                    <Text style={{marginLeft: "25px"}}>已售1</Text>
                </View>
        </View>
    )
}

export default PlayDetail