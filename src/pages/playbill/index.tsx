import React, { useEffect, useState } from "react";
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { Button, Image, Icon, Grid, GridItem, Row, Col, Tag } from "@antmjs/vantui"; 

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
          <View style={{backgroundColor: "white", marginTop: '15px'}}>
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
          data?.slice(0,3).map((item, index) => {
            return  (
              <GridItem forItem="index">
                <Image style="width: 100%; height: 109px; position: 'relative'" src={item.picture} />
                <Text style={{position: "absolute", zIndex: 1, overflow: "hidden", left: 15, bottom: 15}}>
                ¥ {item.sale_price}
                  </Text>
                {/* <Field value={item.p_name} placeholder={"请输入内容"} /> */}
              </GridItem>
            )
        })}
      </Grid>
         <View>
         {
           data?.length ? <Button plain={ true }
           hairline={ true }>查看更多
           <Icon name="arrow" />
           </Button> 
           : <></>
         }
         </View>
          </View>
      )
}

export default PlayBill