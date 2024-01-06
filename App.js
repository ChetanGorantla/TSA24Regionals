import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import InputTextField from './components/InputTextField';
//Navigation import
//import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
  //const
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}options={{headerShown: false,}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



//Login
const Login = props => {
  const onPress = () => {
    props.navigation.navigate('Home');
    
  };

  return (
    <ScrollView style ={styles.container}>
      <View>
        <View style = {{marginTop:60, alignItems: "center", justifyContent: "center"}}>
          <Image source = {require("./assets/logo.png")} style = {{height: 100, width:100}}></Image>
          <Text style={[styles.text, {marginTop:16, fontSize:22, fontWeight: "500"}]}>name</Text>

        </View>
        <View style={{marginTop:48, flexDirection:"row", justifyContent: "center"}}>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image source = {require("./assets/facebook.png")} style = {styles.socialLogo}></Image>
              <Text style = {styles.text}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style = {styles.socialButton}>
              <Image source = {require("./assets/google.png")} style = {styles.socialLogo}></Image>
              <Text style = {styles.text}>Google</Text>
            </View>
          </TouchableOpacity>

        </View>
        
        <Text style = {[styles.text, {color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20}]}>or</Text>


        <InputTextField title="Email"></InputTextField>
        <InputTextField style = {{marginTop:32, marginBottom:8}} title="Password" isSecure = {true}></InputTextField>


        <Text style = {[styles.text, styles.link, {textAlign:"right"}]}>Forgot Password?</Text>

        <TouchableOpacity style={styles.submitContainer} onPress = {onPress}>
          <Text style={[styles.text, {color:"#fff", fontWeight: "600", fontSize:16}]}>Login</Text>
        </TouchableOpacity>

        <Text style={[styles.text, {fontSize:14, color:"#ABB4BD", textAlign:"center", marginTop:24}]}>
          Don't have an account? <Text style = {[styles.text, styles.link]}>Register Now</Text>
        </Text>


        
      </View>
    </ScrollView>
    
  );
}

//Homepage/Dashboard
const Home = () => {
  return (
    <ScrollView style ={styles.container}>
      <View>
        
        <View>

          <View style={{marginTop:48, flexDirection:"row", justifyContent: "left"}}>
            <Text>Welcome back,</Text>
          </View>
          <View style={{marginTop: 10, flexDirection:"row", justifyContent: "left"}}>
            <Text>Chetan Gorantla!</Text>
          </View>


          <View style={{marginTop:35, flexDirection:"row", justifyContent: "center"}}>
            <TouchableOpacity>
              <View style={styles.dashButton}>
                <Image source = {require("./assets/calendar.png")} style = {styles.dashPic}></Image>
                <Text style = {styles.centeredText}>Appointments</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.dashButton}>
                <Image source = {require("./assets/messages.png")} style = {styles.dashPic}></Image>
                <Text style = {styles.centeredText}>Messages</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop:35, flexDirection:"row", justifyContent: "center"}}>
            <TouchableOpacity>
              <View style={styles.dashButton}>
                <Image source = {require("./assets/medications.png")} style = {styles.dashPic}></Image>
                <Text style = {styles.centeredText}>Medications</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.dashButton}>
                <Image source = {require("./assets/professional.png")} style = {{width: 100, height: 140}}></Image>
                <Text style = {styles.centeredText}>Chat with a</Text>
                <Text style = {styles.centeredText}>Professional</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop:35, flexDirection:"row", justifyContent: "center"}}>
            <TouchableOpacity>
              <View style={styles.dashButton}>
                <Image source = {require("./assets/facebook.png")} style = {styles.dashPic}></Image>
                <Text style = {styles.centeredText}>Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.dashButton}>
                <Image source = {require("./assets/facebook.png")} style = {styles.dashPic}></Image>
                <Text style = {styles.centeredText}>Education</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    paddingHorizontal:30
  },
  text: {
    fontFamily: "Avenir Next",
    color: "#1D2029"
  },
  centeredText: {
    fontFamily: "Avenir Next",
    color: "#1D2029",
    alignItems: "center"
  },
  socialButton: {
    flexDirection: "row",
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 38,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171, 180, 189, 0.65)",
    borderRadius:4,
    backgroundColor: "#fff",
    shadowColor: "rgba(171, 180, 189, 0.35)",
    shadowOffset: {width:0, height:10},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
    
  },
  dashButton: {
    
    marginHorizontal:5,
    paddingVertical: 60,
    paddingHorizontal:40,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171, 180, 189, 0.65)",
    borderRadius:4,
    backgroundColor: "#fff",
    shadowColor: "rgba(171, 180, 189, 0.35)",
    shadowOffset: {width:0, height:10},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,

  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8

  },
  dashPic: {
    width:100,
    height:100,
  },
  link: {
    color: "#FF1654",
    fontSize: 14,
    fontWeight:"500"
  },
  submitContainer: {
    backgroundColor:"#FF1654",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop:32,
    alignItems: "center",
    justifyContent:"center",
    shadowColor: "rgba(255, 22, 84, 0.24)",
    shadowOffset: {width:0, height:9},
    shadowOpacity:1,
    shadowRadius:20
  },

});

export default App;
