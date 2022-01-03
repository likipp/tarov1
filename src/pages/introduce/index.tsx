import React, {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {View, Text} from "@tarojs/components"
import { Image, Icon, Divider } from "@antmjs/vantui"; 

import './index.less'

const Introduct = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        Taro.getUserInfo({
            lang: 'zh_CN',
            // desc: '获取你的昵称, 头像, 地区及性别',
            success: (res) => {
                // console.log(res, "res")
                setData(res.userInfo)
            },
            fail: (err) => {
                console.log("请求失败", err)
            }
        })

        Taro.getUserProfile({
            desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
            success: (res) => {
              console.log(res, "res")
            }
          })
    }, [])
    return (
        <View style={{position: 'relative', marginBottom: '160px'}}>
            <View style={{display: "block", zIndex:80}} >
                <Image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2Fv2-e697bd2af1d5178f850bcc0853686826_b.jpg&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642232956&t=763a26da9c564d72030f42f1d03f3209" 
                style="position: 'relative'"
                // width="10rem"
                width="100%"
                height="15rem"
                fit="fill"></Image>
            </View>
            <View style={{width: '90%', backgroundColor: 'white', display: 'flex', alignItems: 'center', zIndex:100, position: "absolute", marginLeft: '5%', marginTop: '-100px'}}>
                <View style={{display: 'inline-flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column', width: "100%" }}>
                    <View>
                        {
                            data ? <Image
                            style={{
                                border: '5px solid #f8f8f9',
                                borderRadius: '50%',
                                marginTop: '-45px',
                                position: 'relative',
                                // top: '-25px'
                            }}
                            round={ true }
                            width="5rem"
                            height="5rem"
                            src={data.avatarUrl} />
                            : <></>
                        }
                    </View>
                    <View style={{fontSize: '25px', marginBottom: '8px', marginTop: '8px'}}>
                        <Text>日常小店</Text>
                    </View>
                    <View style={{backgroundColor: '#d9f7be', color: "#52c41a", borderRadius:'25px', fontSize: '18px', border: '1px solid #19be6b', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: "nowrap"}}>
                        <View style={{marginRight: '5px'}}>
                            <Icon name="manager" />
                        </View>
                        <Text>
                            微信支付已实名
                        </Text>
                    </View>
                    <View style={{justifyContent: 'center', color: '#808695', marginTop: '8px'}}>
                            <Text style={{display: "block"}}>
                                花喜: 如花绽放 心生欢喜的监控美容养生品牌
                            </Text>
                            <Text>
                                百诺恩: 母婴用品、家庭日用品等国产亲民品牌
                            </Text>
                    </View>
                    <Divider />
                    <View style={{marginBottom: '15px', marginTop: '15px', fontSize: '15px', display: 'flex'}}>
                        <View>
                            <Icon name="chat" color="#19be6b"></Icon>
                            <Text style={{marginLeft: '5px'}}>联系商家</Text>
                        </View>
                        <View style={{margin: '0 55px', color: '#e8eaec'}}>|</View>
                        <View>
                    <Icon name="share" color="#2d8cf0"></Icon>
                    <Text style={{marginLeft: '5px'}}>分享主页</Text>
                </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Introduct