import { View } from "@tarojs/components";
import { Tab, Tabs } from "@antmjs/vantui";

const MyBuy = () => {
    return (
        <View>
            <Tabs active="d">
                <Tab
                title="待付款"
                name="a"
                >
                内容 1
                </Tab>
                <Tab
                title="待发货"
                name="b"
                >
                内容 2
                </Tab>
                <Tab
                title="待收货"
                name="c"
                >
                内容 3
                </Tab>
                <Tab
                title="全部订单"
                name="d"
                >
                内容 4
                </Tab>
            </Tabs>
        </View>
    )
}

export default MyBuy