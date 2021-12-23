import React, { useState } from 'react'
import {View} from '@tarojs/components'
import {Popup, Area } from '@antmjs/vantui'
import { areaList } from '@vant/area-data';

const AreaList = () => {
    // const [value, setValue] = useState()
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <View onClick={() => {
                console.log("dianjile yemian")
                setToggle(true)
                }}>
                <Popup
                    position="bottom"
                    show={toggle}
                    onClose={() => setToggle(false)}
                    >
                        <Area
                            areaList={ areaList }
                            columnsPlaceholder={  ['请选择', '请选择', '请选择'] }
                            onChange={() => {}}
                        />
                </Popup>
            </View>
        </>
    )
}

export default AreaList