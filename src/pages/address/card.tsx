import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { RadioGroup, Radio, Divider, Button  } from "@antmjs/vantui";

const Card = () => {
    return (
        <View style={{marginTop: '20px'}}>
            <View style={{float: 'left'}}>
                <Text>刘晓明</Text>
            </View>
            <View style={{float: 'right'}}>158****3765</View>
            <View style={{clear: 'both', paddingTop: '10px'}}>
                浙江温州市乐清市
            </View>
            <Divider />
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Radio
                    checkedColor="#07c160"
                    >
                    默认地址
                </Radio>
                <View>
                    <Text style={{color: '#19be6b', marginRight: '30px'}}>编辑</Text>
                    <Text style={{color: '#ed4014', marginRight: '10px'}}>删除</Text>
                </View>
                <View style={{height: '100px', width: '100%', display: 'flex', alignItems: 'center', position: 'absolute', bottom: 10}}>
                    <Button type="primary" block={true} onClick={() => {
                        Taro.navigateTo({url: "/pages/address/components/aaddress"})
                    }}>添加新地址</Button>
                </View>
            </View>
        </View>
    )
}

export default Card