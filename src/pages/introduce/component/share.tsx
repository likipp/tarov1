import React, { useState } from "react"
import { View } from '@tarojs/components'
import {ShareSheet} from "@antmjs/vantui"

import poster from "/src/pages/static/images/poster.png"

const Share = (props) => {
  const {showShare} = props
  const [options] = useState([[{
    name: '发送给朋友',
    icon: 'wechat'
  }, {
    name: '保存主页海报',
    icon: poster
  }]])
  
  

  return (
      <View>
        <ShareSheet
          title="分享主页"
          show={showShare}
          options={options} />
          onCancel={() => {
            console.log("cancel")
          }}
          onClose={() => {
            console.log("close")
          }}
      </View>
  )
}

export default Share