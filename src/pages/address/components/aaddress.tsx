import React, { useEffect, useState } from 'react'
import {Input, View} from '@tarojs/components'
import { Form, FormItem, Icon, Field } from "@antmjs/vantui";
import { areaList } from '@vant/area-data';
import AreaList from './arealist'

const AAddress = () => {
    const [list] = useState(areaList)
    useEffect(() => {
       console.log(list, "list")
    }, [])
    return (
        <View>
            <Form>
                <FormItem
                    label="收件人"
                    name="userName"
                    required={true}
                    // rules={{
                    // rule: /[\u4e00-\u9fa5]/,
                    // message: '用户名仅支持中文',
                    // }}
                    trigger="onInput"
                    validateTrigger="onBlur"
                    // taro的input的onInput事件返回对应表单的最终值为e.detail.value
                    valueFormat={(e) => e.detail.value}
                    renderRight={<Icon name="user-o" />}
                >
                    <Input placeholder="请输入收件人（中文）" />
                </FormItem>
                <FormItem
                    label="联系电话"
                    name="phone"
                    required={true}
                    // rules={{
                    // rule: /[\u4e00-\u9fa5]/,
                    // message: '用户名仅支持中文',
                    // }}
                    trigger="onInput"
                    validateTrigger="onBlur"
                    // taro的input的onInput事件返回对应表单的最终值为e.detail.value
                    valueFormat={(e) => e.detail.value}
                    renderRight={<Icon name="phone-o" />}
                >
                    <Input placeholder="请输入联系电话" />
                </FormItem>
                <FormItem
                    label= "所在区域"
                    name = "area"
                    trigger="onConfirm"
                    renderRight={<Icon name="arrow" />}
                    >
                        <AreaList />
                </FormItem>
                <FormItem name="address" label="详细地址">
                    <Field clearable={ true }  placeholder="填写详细地址" ></Field>
                </FormItem>
            </Form>
            
        </View>
    )
}

export default AAddress