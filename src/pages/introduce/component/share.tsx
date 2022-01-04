import React, { useState } from "react"
import { View, Text } from '@tarojs/components'
import {ShareSheet} from "@antmjs/vantui"

const Share = (props) => {
  const {showShare} = props
  console.log("显示分享", showShare)
  const [options] = useState([[{
    name: '微信',
    icon: 'wechat'
  }, {
    name: '微博',
    icon: 'weibo'
  }, {
    name: 'QQ',
    icon: 'qq'
  }], [{
    name: '复制链接',
    icon: 'link'
  }, {
    name: '分享海报',
    icon: 'poster'
  }, {
    name: '二维码',
    icon: 'qrcode'
  }]])
  
  

  return (
      <View>
        <ShareSheet>
          zIndex={9999}
          title="分享主页"
          show={showShare}
          option={options}
        </ShareSheet>
      </View>
  )
}

export default Share