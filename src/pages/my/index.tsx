import React, { useState } from "react";
import { View, Text } from "@tarojs/components";
import { Cell, Grid, GridItem, Image } from "@antmjs/vantui";

const My = () => {
    const [login, setLogin] = useState(false)
    return (
        <View>
            {
                login ? <View>已登录</View>
                : <View style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: '10px'
                }}>
                        <Image
                            round={ true }
                            width="5rem"
                            height="5rem"
                            src="/pages/static/images/userL.png"
                        />
                        <Text style={{marginLeft: '10px'}}>请先登录</Text>
                </View>
            }
            <Cell
                isLink={ true }
                icon="balance-list"
                title="购买"
                linkType="navigateTo"
                value={"订单11"}
                url="/pages/mybuy/index"
            />
            <Grid columnNum={3} border={false} style={{borderBottom: '1px solid #f8f8f9'}}>
                <GridItem
                    icon="credit-pay"
                    text="待支付"
                    />
                <GridItem
                    icon="shop"
                    text="待发货"
                />
                <GridItem 
                    icon="logistics"
                    text="已发货"
                />
            </Grid>
            <Cell
                isLink={ true }
                icon="location"
                title="地址管理"
                linkType="navigateTo"
                url="/pages/address/index"
            />
        </View>
    )
}

export default My