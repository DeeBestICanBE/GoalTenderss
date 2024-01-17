import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '..//screens/RegisterScreen';
import WalletMainScreen from '../screens/WalletMainScreen';
import HomeScreen from '../screens/HomeScreen';
import GoalScreen from '../screens/GoalScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />  
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name ="Wallet" component={WalletMainScreen}/>
      <Stack.Screen name ="Goal" component={GoalScreen}/>
    </Stack.Navigator>
  );
}

export default  AuthStack;