import React, { useEffect, useRef } from 'react'
import {Input, View } from '@tarojs/components'
import { Form, FormItem, Icon, Field, Button } from "@antmjs/vantui";
import type {IFormInstanceAPI} from '@antmjs/vantui/types/form'
import AreaList from './arealist'

const AAddress = () => {
    const addRef = useRef<IFormInstanceAPI>()
    const handleSubmit = () => {
        console.log("ref")
    }
    useEffect(() => {
        console.log(addRef.current.getFieldsValue(), "addRef")
    }, [])
    return (
        <View>
            <Form
            ref={addRef as any}
                onFinish={(e: any) => console.log("完成了",e)}
            >
                <FormItem
                    label="收件人"
                    name="userName"
                    required={true}
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
                    valueFormat={(e) => e.detail.value}
                    valueKey="value"
                    trigger="onConfirm"
                    required={true}
                    renderRight={<Icon name="arrow" />}
                        >
                        <AreaList />
                </FormItem>
                <FormItem name="address" label="详细地址" layout="vertical" required={true} trigger="onInput"
                    validateTrigger="onBlur">
                    <Field type="textarea" placeholder="填写详细地址" autosize={true}/>
                </FormItem>
                <View style={{height: '100px', width: '100%', display: 'flex', alignItems: 'center', position: 'absolute', bottom: 10}}>
                    <Button
                        type="primary"
                        block={true}
                        className="van-button-submit"
                        onClick={() => {handleSubmit}}
                        formType="submit"
                        >
                    提交
                    </Button>
                </View>
            </Form>
            
        </View>
    )
}

export default AAddress