import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
// import * as Keychain from "react-native-keychain";
// import { user_login } from '../Api/user_api';

import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  Section,
} from 'react-native';

// import {auth, firebase} from '../services/config'

// import { getAuth, onAuthStateChanged } from "firebase/auth";

// import { Button } from 'react-native-elements';

// import axios from 'axios';

// import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

// import Loginbutton from '../components/Loginbutton';

const RegisterScreen = () => {

  const navigation  = useNavigation();
  
  const [email, setEmail] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const [password, setPassword] = useState('');

  const [user, setUsers] = useState([]);
  
function CreateUser() {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  console.log("Email: " + email.text +" Password: "+ password.text);
    navigation.navigate("HomeScreen");

}

function onLoginUser(){
  if(email !== "" && password!=="")
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    console.log("Email: " + email.text +" Password: "+ password.text);
      navigation.navigate("HomeScreen");
  
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#D3D3D3',backgroundColor:'teal' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Create your Account for <Text style={{ color: '#FFD700' }}>GoalTenders</Text>
          </Text>
          <Text style={styles.subtitle}>
           Here you will create your account and well take it from there
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Full name</Text>
            <TextInput
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="emailAddress"
              textContentType='email-address'
              onChangeText={text => setEmail({ text})}
              placeholderText="email-address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="emailAddress"
              textContentType='email-address'
              onChangeText={text => setEmail({ text})}
              placeholderText="email-address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}> Password </Text>
            <TextInput
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="emailAddress"
              textContentType='email-address'
              onChangeText={text => setEmail({ text})}
              placeholderText="email-address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}> Motivation </Text>
            <TextInput
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="emailAddress"
              textContentType='email-address'
              onChangeText={text => setEmail({ text})}
              placeholderText="email-address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Passion</Text>
            <TextInput
              value={password}
              autoCorrect={false}
              textContentType="password"
              onChangeText={text => setPassword({text})}
              placeholderText="password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
             onPress={()=> onLoginUser()}
               >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.formAction3}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
               >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Go Back</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>

  )
  };


const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000000',
    textAlign: 'center',
  },
  form: {
    marginBottom: 20,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingBottom:5,
  },
  formAction: {
    marginVertical: 5,
  },
  formAction2: {
    marginVertical: 24,
  },
  formAction3: {
    marginVertical: 5,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 7,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    // backgroundColor: '#FFD700',
    backgroundColor:"#EEE8AA",
    borderColor: '#000000',
  },
  btnText: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '600',
    color: '#000000',
  },
});

export default RegisterScreen;