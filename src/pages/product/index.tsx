import React from "react";
import { View, Text, Button, Image, Swiper, SwiperItem } from "@tarojs/components";

const Product = (props) => {
    const [data] = props
    // console.log(props, "props")
    // console.log(data, "数据")
    return (
        <View>
        {/* <Swiper>
          {
            data !== [] ? data?.map((e) => {
              <SwiperItem key={e.p_number}>
                <Image model="widthFix" style={{width: '100%'}} src={e.picture}></Image>
              </SwiperItem>
            })
            : <></>
          }
        </Swiper>
        <View> */}
          {/* {
            data === [] ? <Text>测试</Text>
            : <Text>空值</Text>
          } */}
          <Text>1111</Text>
        </View>
    )
}

export default Product