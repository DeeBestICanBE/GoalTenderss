import { View, Text ,StyleSheet, Button} from "react-native";
import SplashScreen from './screens/SplashScreen'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from "./navigation/authStack";
import LoginScreen from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import { useState } from "react";
import AppNav from "./navigation/AppNav";
import {AuthProvider} from './navigation/AuthContext'

// const Stack = createNativeStackNavigator();

 
const App = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
 
  return (
   <NavigationContainer>
    {/* <AppStack/> */}
    <AuthStack/>
   </NavigationContainer>

  // <AuthProvider>
  //   <AppNav/>
  // </AuthProvider>
  );
}

const styles = StyleSheet.create({
  
});

export default App;