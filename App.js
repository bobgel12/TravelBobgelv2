import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'
import SavedTripScreen from './screens/SavedTripScreen'
import DayDetailScreen from './screens/DayDetailScreen'
import DayPickerScreen from './screens/DayPickerScreen'
import SignInScreen from './screens/SignInScreen'
import RegisterScreen from './screens/RegisterScreen'


// React-Navigation-Material
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


// Redux Import
import reduxStore from './store'
import { Provider } from 'react-redux'

const {width} = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <AppDrawNavigator />
      </Provider>
    );
  }
}

// This is the Drawer Navigator
const CustomDrawComponent = (props) => (
  <SafeAreaView style = {{flex: 1}}>
    <View style = {{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
      <Image source = {require('./assets/passanger.png')} style = {{height: 80, width: 80}}></Image>
    </View>
    <ScrollView>
      <DrawerItems {...props}/>
    </ScrollView>
  </SafeAreaView>
)

// This is the tab Navigator for NewTrip
const TabNavigation = createMaterialBottomTabNavigator({
  Destination: { screen: HomeScreen },
  DayPicker: { screen: DayPickerScreen },
  DayDetail: { screen: DayDetailScreen }
})

// This is the main Navigator for the app
const AppDrawNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Setting: SettingScreen,
  Register: RegisterScreen,
  SignIn: SignInScreen,
  SavedTrip: SavedTripScreen,
  NewTrip: TabNavigation
},{
  contentComponent: CustomDrawComponent,
  // drawerWidth: width
  contentOptions: {
    activeTintColor: "orange"
  }
})