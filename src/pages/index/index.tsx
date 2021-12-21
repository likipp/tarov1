import React, { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import {useDidShow} from '@tarojs/taro'
import logo from "./hook.png";

import './index.less'

import TabbarCompont from "../tabbar";
import PlayBill from "../playbill";
import QuickBill from "../quickbill";
import Introduct from "../introduce";

const Index = () => {
  const env = useEnv();
  const [_, { setTitle }] = useNavigationBar({ title: "Taro Hooks" });
  const [show] = useModal({
    title: "Taro Hooks!",
    showCancel: false,
    confirmColor: "#8c2de9",
    confirmText: "支持一下",
    mask: true,
  });

  const [showToast] = useToast({ mask: true });
  const [height, setHeight] = useState(0)
  const scrollStyle = {
    height: `${height}px`
  }
  const scrollTop = 0
  const Threshold = 20

  const handleModal = useCallback(() => {
    show({ content: "不如给一个star⭐️!" }).then(() => {
      showToast({ title: "点击了支持!" });
    });
  }, [show, showToast]);

  useDidShow(() => {
    
  })

  useEffect(() => {
    Taro.getSystemInfo({
      success: res => {
        setHeight(() => {
          return res.screenHeight
        })
      }
    })
  }, [])

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
