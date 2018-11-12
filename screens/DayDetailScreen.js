import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header, Left, Right, Icon, Tab, Tabs, ScrollableTab, Button, ActionSheet, Content, ListItem, Body, Title,
    Thumbnail} from 'native-base'


var BUTTONS = ["Day 1", "Day 2", "Day 3", "Day 4", "Cancel"];
var REMOVE = ["Remove"];
var CANCEL_INDEX = 4;
const days = [1, 2, 3, 4, 5, 6]

class DayDetailScreen extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            day: [
                {
                    day: 1,
                    list: ["Mission Peak", "Mission Peak2", "Mission Peak3"]
                },
                {
                    day: 2,
                    list: ["Mission Peak", "Mission Peak2", "Mission Peak3"]
                },
                {
                    day: 3,
                    list: ["Mission Peak", "Mission Peak2", "Mission Peak3"]
                },
            ]
        };
    }

    render() {
        const renderedTabs = this.state.day.map(b => {
            const renderedPOI = b.list.map(a =>{
                return(
                    <Text style={{ textAlign: "center" }}>{a}</Text>
                )
            })
            return (<Tab heading={"Day " + b.day}>
                        <Text style={{textAlign: "center"}}>DAY {b.day}</Text>
                        {renderedPOI}
                    </Tab>)
        });
        return (
            <View style={{flex:1}}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => this.props.navigation.openDrawer()}></Icon>
                    </Left> 
                    <Body style={{}}>
                        <Title> Planner </Title>
                    </Body>
                    <Right>
                        <Thumbnail small source={require('../assets/group.png')} />
                    </Right>
                </Header>

                <Tabs renderTabBar = {() => <ScrollableTab/>}>
                    {renderedTabs}
                </Tabs>   
            </View>
        )
    }
}

export default DayDetailScreen
