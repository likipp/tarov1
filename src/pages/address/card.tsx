import React, {useEffect, useMemo, useState} from 'react'
import Taro, { useDidShow } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { RadioGroup, Radio, Divider, Button, Checkbox, Icon, Image  } from "@antmjs/vantui";
import checked from '../static/images/checeked.png'
import ucheck from '../static/images/ucheck.png'

const Card = (props) => {
    const {data} = props
    const [value, setValue] = useState(false)
    const [list, setList] = useState(data)

    useEffect(() => {
        console.log("页面加载")
        return () => {
            console.log("页面卸载")
        }
    }, [list])
    
    return (
        <View style={{marginTop: '20px'}}>
            {
                list.map((item, index) => {
                   return  <View style={{marginBottom: '20px', backgroundColor: 'white'}}>
                                <View style={{padding: '15px 5px 0'}}>
                                    <View style={{float: 'left'}}>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{float: 'right'}}>{item.tel}</View>
                                    <View style={{clear: 'both', paddingTop: '10px'}}>
                                        {item.address}
                                    </View>
                                </View>
                                <Divider />
                                <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0px 5px 15px'}}>
                                    <Checkbox
                                        value={item.isDefault}
                                        renderIcon={(
                                            <Image src={item.isDefault ? checked : ucheck} width={50} height={50}/>
                                        )}
                                        onChange={() => {
                                            if (!item.isDefault) {
                                                let temp = list
                                                temp.map((t, i) => {
                                                    if (i == index) {
                                                        t.isDefault = !t.isDefault
                                                    } else {
                                                        t.isDefault = false
                                                    }
                                                })
                                                setList(() => {
                                                    return temp
                                                })
                                            }
                                        }}
                                    >
                                        默认地址
                                    </Checkbox>
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
                                    })
                                }
        </View>
    )
}

export default Card