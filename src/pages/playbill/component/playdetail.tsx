import React from "react";
import { View, Text } from "@tarojs/components";
import { Icon, Button, Image } from "@antmjs/vantui";
import * as dayjs from 'dayjs'

import ellipsis from "/src/pages/static/images/ellipsis.png"
import wechat from "/src/pages/static/images/wechat.png"

const PlayDetail = () => {
    return (
        <View style={{margin: "0 15px"}}>
            <View>
                <Text style={{float: "left"}}>日常小店</Text>
                <Button style="border: none; display: inline; float: right; height: 30px; padding: 0">
                        更多商品
                        <Icon name="arrow" />
                    </Button>
            </View>
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
            <View style={{backgroundColor: "#f8f8f9", borderRadius: "15px", display: "flex", alignItems: "center", flexWrap: "wrap", padding: "15px"}}>
                        <View style={{width: "50%", marginBottom: "15px"}}>百诺恩润唇膏一支</View>
                        <View style={{width: "50%", display:"flex", justifyContent: "flex-end", marginBottom: "15px"}}>¥3200.00</View>
                        <Text style={{width: "50%", color: "#808695"}}>已售 1</Text>
                        <Icon name="add-o" style="width: 50%; display: flex; justifyContent: flex-end" color="#1296db" size="25px" />
            </View>
            <View style={{display: "flex", alignItems: "center", justifyContent:"space-between", position: "absolute", bottom: "20px", width: "100%"}}>
               <View>
                <Text>3件商品，合价</Text>
                <Text>¥32.00</Text>
               </View>
               <Button size="small" color="#1296db" style="margin: 0 30px 0 0">选好了</Button>
           </View>
        </View>
    )
}

export default PlayDetail