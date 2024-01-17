import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Home from "../screens/HomeScreen";

const Stack = createStackNavigator();

export default function userStack() {
    return (
     <NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name="Home"  component={Home}/>
</Stack.Navigator>
     </NavigationContainer>
    )
}