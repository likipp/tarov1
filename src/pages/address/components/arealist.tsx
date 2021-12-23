import React, { useState } from 'react'
import {View, Text} from '@tarojs/components'
import {Popup, Area } from '@antmjs/vantui'
import { areaList } from '@vant/area-data';

const AreaList = () => {
    const [value, setValue] = useState()
    const [toggle, setToggle] = useState(false)

    const formatArea = (data: any) => {
        return data[0].name + data[1].name + data[2].name
    }

    return (
        <>
            <View onClick={() => {
                setToggle(true)
                }}
                style={{width: '200px', height: '20px'}}
                >
                    {value ? value : <Text style={{color: '#969799'}}>请选择所在区域</Text>}
            </View>
            <Popup
                    position="bottom"
                    show={toggle}
                    onClose={() => setToggle(false)}
                    >
                        <Area
                            value={value}
                            areaList={ areaList }
                            columnsPlaceholder={  ['请选择', '请选择', '请选择'] }
                            onChange={() => {
                                // console.log(event, "event")
                            }}
                            onConfirm={(event) => {
                                let area = formatArea(event.detail.value)
                                setValue(area)
                                setToggle(false)
                            }}
                            onCancel={() => {
                                setToggle(false)
                            }}
                        />
                </Popup>
        </>
    )
}

export default AreaList