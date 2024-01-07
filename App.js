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
        <Stack.Screen name="Appointments" component={Appointments}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



//Login page
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
const Home = props => {
  const onAppts = () => {
    props.navigation.navigate('Appointments');
    
  };
  return (
    <ScrollView style ={styles.container}>
      <View>
        
        <View>

          <View style={{marginTop:60, flexDirection:"row", justifyContent: "left"}}>
            <Text style = {{fontSize:30, color: "#FF6961"}}>Welcome back,</Text>
          </View>
          <View style={{marginTop: 10, flexDirection:"row", justifyContent: "left"}}>
            <Text style = {{fontSize:40, color: "#BD2A2A"}}>Chetan Gorantla!</Text>
          </View>


          <View style={{marginTop:35, flexDirection:"row", justifyContent: "center"}}>
            <TouchableOpacity onPress={onAppts}>
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
              <View style={[styles.dashButton, {height: 240}]}>
                <Image source = {require("./assets/openai.png")} style = {{width: 105, height: 107}}></Image>
                <Text style = {styles.centeredText}>Chat with a</Text>
                <Text style = {styles.centeredText}>Professional</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop:35, flexDirection:"row", justifyContent: "center"}}>
            <TouchableOpacity>
              <View style={styles.dashButton}>
                <Image source = {require("./assets/hospital.png")} style = {styles.dashPic}></Image>
                <Text style = {styles.centeredText}>Hospital</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.dashButton}>
                <Image source = {require("./assets/education.png")} style = {styles.dashPic}></Image>
                <Text style = {styles.centeredText}>Education</Text>
              </View>
            </TouchableOpacity>
          </View>
          
        </View>

      </View>
    </ScrollView>
  );
}

//Appointments
const Appointments = () => {
  
  return (
    <ScrollView style ={styles.container}>
      <View>
        <View>
          
            <View style = {[styles.appointment, {alignItems: "center"}]}>
              <Text style = {styles.text}>Kelsey Seybold - Thyroid Checkup February 10, 2024 at 3:15 - 3:45 pm <Text style = {[styles.text, styles.link]}>Want to reschedule?</Text></Text>
              
              
            </View>
            <View style = {[styles.appointment, {alignItems: "center"}]}>
              <Text style = {styles.text}>Kelsey Seybold - Bone Density Scan March 24, 2024 at 10:30 - 11 am       <Text style = {[styles.text, styles.link]}>Want to reschedule?</Text></Text>
              
              
            </View>
          
        </View>
      </View>
    </ScrollView>
  )
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
  appointment: {
    flexDirection: "row",
    marginHorizontal: 0,
    marginVertical: 15,
    paddingVertical: 20,
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
