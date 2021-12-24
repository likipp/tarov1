import React, { useEffect, useState } from "react";
import { ScrollView, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEnv, useNavigationBar } from "taro-hooks";

import './index.less'
import PlayBill from "../playbill";
import QuickBill from "../quickbill";
import Introduct from "../introduce";

const Index = () => {
  const env = useEnv();
  const [_, { setTitle }] = useNavigationBar({ title: "日常小店" });

  const [height, setHeight] = useState(0)
  const scrollStyle = {
    height: `${height}px`
  }
  const scrollTop = 0
  const Threshold = 20

  useEffect(() => {
    Taro.getSystemInfo({
      success: res => {
        setHeight(() => {
          return res.screenHeight
        })
      }
    })
  }, )

  return (
    <ScrollView
      scrollY
      scrollWithAnimation
      enableBackToTop
      enableFlex
      scrollTop={scrollTop}
      style={scrollStyle}
      lowerThreshold={Threshold}
      upperThreshold={Threshold}
    >
      <View className="wrapper">
        <Introduct />
        <PlayBill />
        <QuickBill />
        {/* <TabbarCompont /> */}
      </View>
    </ScrollView>
  );
};

export default Index;
