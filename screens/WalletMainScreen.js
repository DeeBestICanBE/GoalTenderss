import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet, Pressable } from "react-native";

import {
  WalletConnectModal,
  useWalletConnectModal,
} from "@walletconnect/modal-react-native";
// Add in the useWalletConnectModal hook

const projectId = "aa414f6a849bbefa4cee76a9812f628b";

const providerMetadata = {
  name: "YOUR_PROJECT_NAME",
  description: "YOUR_PROJECT_DESCRIPTION",
  url: "https://your-project-website.com/",
  icons: ["https://your-project-logo.com/"],
  redirect: {
    native: "YOUR_APP_SCHEME://",
    universal: "YOUR_APP_UNIVERSAL_LINK.com",
  },
};

const WalletMainScreen = () => {
 // Add in the useWalletConnectModal hook + props
 const { open, isConnected, address, provider } = useWalletConnectModal();

 // Function to handle the
 const handleButtonPress = async () => {
   if (isConnected) {
     return provider?.disconnect();
   }
   return open();
 };

 return (
   <View style={styles.container}>
     <Text style={styles.heading}>BlockChain Cookout</Text>
 
     <Text>{isConnected ? address : "No Connected"}</Text>
     <Pressable  onPress={handleButtonPress} style={styles.pressableMargin}>
       <Text style={styles.cbutton} >{isConnected ? "Disconnect" : "Connect"}</Text>
     </Pressable>

     <WalletConnectModal
       projectId={projectId}
       providerMetadata={providerMetadata}
       />
   </View>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD700",
        alignItems: "center",
        justifyContent: "center",
      },
      heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
        top:-100,
        
      },
      pressableMargin: {
        marginTop: 16,
      },
      cbutton: {
       backgroundColor:'black',
       color:'white',
       
      },

});

export default WalletMainScreen;