import { WalletConnectModal } from "@walletconnect/modal-react-native";
import { View, Text ,StyleSheet, Button} from "react-native";
import WalletMainScreen from "./WalletMainScreen";
import HomeScreen from "./HomeScreen";

const SplashScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>GoalTenders...</Text>
      <Button
      title="Enter"
      onPress={()=> navigation.navigate('Login')}
      />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {

  },
});


export default SplashScreen;