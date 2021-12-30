import React, {useEffect, useState} from "react";
import Taro from "@tarojs/taro";
import {View, Text} from "@tarojs/components"
import * as dayjs from 'dayjs'

import { Row, Col, Tag, Image, Button, Divider } from "@antmjs/vantui"; 

import ellipsis from '../static/images/ellipsis.png'

const QuickBill = () => {
    const [data, setData] = useState()

    useEffect(() => {
        Taro.request({
          url: "http://localhost:8080/api/v1/base/product/",
          method: "GET",
          success: (res) => {
            setData(() => {
              return res.data.data
            })
            Taro.hideLoading()
          },
          fail: (err) => {
            console.log(err, "失败了")
          }
        })
      }, [])


    return (
        <View className="page">
            <Row>
                <Col span={24}>
                    <Text style={{fontSize: '30px'}}>{dayjs().format('MM月DD日')}速购单</Text>
                    <Tag type="primary" plain={ true } size={"medium"} style={{bottom: '5px'}}>
                        3件商品
                    </Tag>
                </Col>
            </Row>
            <View>
                {
                    data?.length ? <Image style="width: 110px; height: 110px; position: 'relative'" src={data[3].picture} />
                    : <></>
                }
                <View style={{marginLeft: '30px', marginBottom: '5px'}}>
                    <Row style={{marginBottom: '5px'}}>
                        <Col span={20}>
                            <Text>百诺恩润唇膏有一支</Text>
                        </Col>
                        <Col span={4}>
                            <Text>¥32.00</Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={20}>
                            <Text>百诺恩润唇膏有四支</Text>
                        </Col>
                        <Col span={4}>
                            <Text>¥32.00</Text>
                        </Col>
                    </Row>
                </View>
            </View>
            <Divider />
            <View style={{display: "flex", alignContent: "center", justifyContent: "space-between", position: "relative"}}>
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
                <Button style="float: right; margin: 0 18px 18px 0" size="small" color="#1296db"
                    onClick={() => {
                        Taro.navigateTo({
                            url: "/pages/playbill/component/playdetail"
                        })
                    }}
                >立即抢购</Button>
            </View>
        </View>
    )
}

export default QuickBill