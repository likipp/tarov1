import React, { useState } from "react";
import { View } from "@tarojs/components";
import { Icon } from "@antmjs/vantui";

const Stepper = () => {
    const [count, setCount] = useState(1)
    console.log(count, "count")
    return (
        <View>
            {/* <Button round={ true } type="primary" >+</Button> */}
            <Icon name="add" size="25px" color="#1296db" onClick={() => {
                console.log("点击了加号")
                setCount(1)
            }} /> 
        </View>
    )
}
export default Stepper