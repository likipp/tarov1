import React, { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Button, Image, Icon, Grid, GridItem, Row, Col, Tag } from "@antmjs/vantui"; 

import "./index.less"

const PlayBill = () => {
    const [data, setData] = useState()

    useEffect(() => {
        Taro.request({
          url: "http://localhost:8080/api/v1/base/product/",
          method: "GET",
          success: (res) => {
            setData(() => {
              // console.log(res.data.data.slice(0,3))
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
                <Col span="12">
                  <Text style={{fontSize: '30px'}}>
                  商品海报
                </Text>
                {
                  data?.length ? <Tag type="primary" plain={ true } size={"medium"} style={{bottom: '5px'}}>
                    {data?.length}件商品
                  </Tag>
                  : <Tag type="primary" plain={ true } size={"medium"} style={{bottom: '5px'}}>
                  0件商品
                </Tag>
                }
                {/* <Text>{data?.length}件商品</Text> */}
              </Col>
              </Row>
              <Grid
                columnNum={3}
                border={ false }
              >
              {
                  data?.slice(0,3).map((item: any) => {
                    console.log(item, "item")
                    return  (
                      <GridItem linkType="navigateTo" url={`/pages/productdetail/index?id=${item.id}`}>
                        <Image className="img" src={item.picture} />
                        <Text className="price">
                        ¥ {item.sale_price}
                          </Text>
                      </GridItem>
                    )
                })}
              </Grid>
            <View className="more">
                {
                  data?.length ? <View
                  onClick={() => {
                    Taro.navigateTo({
                      url: '/pages/product/index'
                    })
                  }}
                  >查看更多
                      <Icon name="arrow" />
                    </View> 
                  : <></>
                }
            </View>
          </View>
      )
}

export default PlayBill