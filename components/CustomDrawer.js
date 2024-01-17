import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GoalScreen from "../screens/GoalScreen";
import FriendsScreen from "../screens/FriendsScreen";
import WalletMainScreen from "../screens/WalletMainScreen";
import Home from "../screens/HomeScreen";


const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return(
    <Drawer.Navigator initialRouteName='Home'>
    {/* <Drawer.Screen name='WalletScreen' component={WalletMainScreen}/> */}
    {/* <Drawer.Screen name='Home' component={Home}/> */}
    <Drawer.Screen name='Goal' component={GoalScreen}/>
    <Drawer.Screen name='friends' component={FriendsScreen}/>
    <Drawer.Screen name='wallet' component={WalletMainScreen}/>
   </Drawer.Navigator>

)}

export default DrawerNav;