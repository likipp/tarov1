import React from "react"
import {View, ScrollView, Text} from "@tarojs/components"
import { Image, Icon } from "@antmjs/vantui";

const ProductItem = (props) => {
    const {list} = props
    const scrollStyle = {
        height: `${list?.length * 435}px`
      }
    const scrollTop = 0
    const Threshold = 60
    const onScroll = (e) => {
      console.log(e, "event")
    }

    return (
        <View>
            <ScrollView
                scrollY
                scrollWithAnimation
                enableBackToTop
                enableFlex
                scrollTop={scrollTop}
                style={scrollStyle}
                lowerThreshold={Threshold}
                upperThreshold={Threshold}
                onScroll={onScroll}
              >
                <View >
                {
                  list?.length > 0 ? list.map((item) => {
                    return (
                      <View style={{border: "1px solid #e8eaec", borderRadius: "10px", marginBottom: "20px", marginRight: "15px", backgroundColor: "white", overflow:"hidden"}} >
                          <Image
                            width={500}
                            height={500}
                            src={item.picture}
                            fit="none"
                            radius={25}
                          />
                          <View style={{height: "80px", margin: "25px 0 25px 25px", position: "relative", overflow: "hiden"}}>
                              <Text style="color:red; bottom: 53px; position:absolute">
                                  ¥
                              </Text>
                              <Text style="zIndex: 0; font-size: 30px; color: red; margin-left: 10px">
                                  {item.sale_price}
                              </Text>
                              <Text style="display: block">
                                  {item.p_name}
                              </Text>
                              <View>
                                  <Icon name="add" color="#ee0a24" size="25px" style="width: 26px; height: 26px; margin: 1px; position:absolute; right: 15px" onClick={() => {
                                        
                                    }} />
                              </View>
                          </View>
                        </View>
                    )
                  })
                  : <></>
                }
                </View>
              </ScrollView>
        </View>
    )
}

export default ProductItem