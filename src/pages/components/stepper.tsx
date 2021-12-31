import React, { useState } from "react";
import { View } from "@tarojs/components";
import { Icon } from "@antmjs/vantui";

// import add from "../static/images/add.png"
// import minus from "../static/images/minus.png"

const Stepper = () => {
    const [count, setCount] = useState(1)
    return (
        <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Icon name="music" size="25px" color="#1296db" onClick={() => {
                setCount((pre) => {
                    return pre - 1
                })
            }} />
            <View>{count}</View>
            <Icon name="add" size="25px" color="#1296db" onClick={() => {
                console.log("点击了加号")
                setCount((pre) => {
                    return pre + 1
                })
            }} /> 
        </View>
    )
}
export default Stepper