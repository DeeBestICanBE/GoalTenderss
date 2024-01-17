
import { View, Text, SafeAreaView } from 'react-native'
import * as React from 'react';
import { Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import WalletMainScreen from './WalletMainScreen';
// import FriendsScreen from './FriendsScreen';
// import GoalScreen from './GoalScreen';
import DrawerNav from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1,backgroundColor:'red'}}>
       <DrawerNav/>
      </View>
    </SafeAreaView>
  )
}

export default Home;