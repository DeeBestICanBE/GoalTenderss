import { View, Text,StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import RegisterScreen from './RegisterScreen';
import Home from './HomeScreen'


// import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';

//import { getAuth } from 'firebase/auth';

 //const auth = getAuth();


//  const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// const monogUrl = "mongodb+srv://dwoodall328:11111111@cluster0.1xgqyig.mongodb.net/?retryWrites=true&w=majority"

// function Makereq() {
//   try{
// mongoose.
// connect(monogUrl).then(()=> {
// console.log("Database connected");
// }).catch((e) => {
//   console.log(e);
// });

// app.get("/",(reg,res)=> {
//   res.send({status:'Started'});
// });

// app.listen(5001,()=>{
//   console.log("Node js server has been started.");
// });
// }catch(e) {

// }
// }


const LoginScreen = ({navigation}) => {

const [email, setemail] = useState();
const [password, setPassword] = useState();
const [user, setUser] = useState();
const [validationMessage , setValidationMessage] = useState('')

async function loginuser() {
 //
 


}

  return (
<SafeAreaView style={{ flex: 1, backgroundColor: 'teal' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Sign in to <Text style={{ color: '#FFD700' }}>GoalTenders</Text>
          </Text>
          <Text style={styles.subtitle}>
            Login and Continue to connect with like minded indivisuals
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              value={email}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="emailAddress"
              textContentType='email-address'
              onChangeText={email => setemail({email})}
              placeholderText="email-address"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              value={password}
              autoCorrect={false}
              textContentType="password"
              onChangeText={password => setPassword({password})}
              placeholderText="password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.formAction}>
            <Text style={{marginTop:10,color:'red'}}> {validationMessage}</Text>
            <TouchableOpacity
             onPress={() => loginuser()}
               >
                
              <View style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* // swap with custom components */}
          {/* <View style={styles.formAction2}>
            <TouchableOpacity
           onPress={() => navigation.navigate('Register')}
             >
              <View style={styles.btn}>
                <Text style={styles.btnText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View> */}
          {/*  Add social buttons for social logins */}
          <TouchableOpacity style={{ marginTop: 'auto' }}
          onPress={() => navigation.navigate('Register')}
          >
            <Text style={styles.formFooter}>
              Don't have an account?{' '}
              <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  
)
}


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
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
    padding:10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'gold',
    textAlign: 'center',
    borderRadius:1,
   borderStyle:'dotted',
    borderWidth:2,
    paddingTop:5,
    borderColor:'black',
    backgroundColor:'teal'
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formAction2: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
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

export default LoginScreen;