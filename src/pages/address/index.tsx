import React, { useEffect, useState } from 'react'
import {View} from '@tarojs/components'
import Card from './card'

const Address = () => {
  const [data, setData] = useState([{
    id: '1',
    name: '张三',
    tel: '13000000003',
    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
    isDefault: true,
  },
  {
    id: '2',
    name: '李四',
    tel: '1310000004',
    address: '浙江省杭州市拱墅区莫干山路 50 号',
  }])

const handleChange = (value: any) => {
  console.log(value, 'handleChange')
  setData(() => {
    return value
  })
}

  useEffect(() => {
    console.log("加载", data)
  })

    return (
        <View style={{backgroundColor: '#f8f8f9', height: '753px', display: 'block'}}>
            <Card data={data} handleChange={handleChange} />
        </View>
    )
}

export default Address