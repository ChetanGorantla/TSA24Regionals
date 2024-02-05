import React, { useState } from 'react';
import { StyleSheet, Modal, FlatListText, FlatList, View, TouchableOpacity, ScrollView, Image, TextInput, Text, Linking, Button} from 'react-native';
import InputTextField from './components/InputTextField';
import * as SMS from 'expo-sms';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatGPT from './src';

import i18next, { languageResources } from './services/i18next';
import {useTranslation} from "react-i18next";
import languagesList from './services/languagesList.json';


const App = () => {
  //const
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}options={{headerShown: false,}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false,}}/>
        <Stack.Screen name="Appointments" component={Appointments}/>
        <Stack.Screen name="Virtual Assistant" component={GPT}/>
        <Stack.Screen name="Medications" component={Medications}/>
        <Stack.Screen name="Language" component={Language}/>
        <Stack.Screen name="Education" component={Education}/>
        <Stack.Screen name="Hospital" component={Hospital}/>
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
      <View style = {{marginTop:30}}>
        <View style = {{marginTop:60, alignItems: "center", justifyContent: "center"}}>
          <Image source = {require("./assets/logo.png")} style = {{height: 100, width:100}}></Image>
          <Text style={[styles.text, {marginTop:16, fontSize:22, fontWeight: "500"}]}>StaySafe</Text>

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

  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);
  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  }
  

  const onAppts = () => {
    props.navigation.navigate('Appointments');
    
  };
  const onGPT = () => {
    props.navigation.navigate('Virtual Assistant');
    
  };
  const onMedication = () => {
    props.navigation.navigate('Medications');
    
  };
  const onLanguage = () => {
    props.navigation.navigate('Language');
    
  };
  const onEducation = () => {
    props.navigation.navigate('Education');
    
  };
  const onHospital = () => {
    props.navigation.navigate('Hospital');
    
  };
  return (
    <ScrollView style ={styles.container}>
      <View>
        
        <View>

          <View style={{marginTop:60, flexDirection:"row", justifyContent: "left"}}>
            <Text style = {{fontFamily: "Avenir Next", fontSize:30, color: "#4A515F", fontWeight: 'bold'}}>Welcome,</Text>
          </View>
          <View style={{marginTop: 10, flexDirection:"row", justifyContent: "left"}}>
            <Text style = {{fontFamily: "Avenir Next", fontSize:35, color: "#1A515F", fontWeight:'bold'}}>Chetan Gorantla!</Text>
          </View>


          <View style={{marginTop:35, flexDirection:"row", justifyContent: "center"}}>
            <TouchableOpacity onPress={onAppts} style = {{}}>
              <View style={[styles.dashButton, {justifyContent: "center", backgroundColor: "#C7D3D6"}]}>
                <Image source = {require("./assets/calendar.png")} style = {styles.dashPic}></Image>
                <Text style = {[styles.centeredText, {color: "#1A515F", fontWeight:"600"}]}>{t("appointments")}</Text>
                
                
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLanguage}>
              <View style={[styles.dashButton, {justifyContent: "center", backgroundColor: "#C7D3D6"}]}>
                <Image source = {require("./assets/globe.png")} style = {styles.dashPic}></Image>
                <Text style = {[styles.centeredText, {color: "#1A515F", fontWeight:"600"}]}>{t("languages")}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop:35, flexDirection:"row", justifyContent: "center"}}>
            <TouchableOpacity onPress={onMedication}>
              <View style={[styles.dashButton, {justifyContent: "center", backgroundColor: "#C7D3D6"}]}>
                <Image source = {require("./assets/medications.png")} style = {styles.dashPic}></Image>
                <Text style = {[styles.centeredText, {color: "#1A515F", fontWeight:"600"}]}>{t("medications")}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onGPT}>
              <View style={[styles.dashButton, {justifyContent: "center", backgroundColor: "#C7D3D6", height:240}]}>
                <Image source = {require("./assets/openai.png")} style = {{width: 105, height: 107}}></Image>
                <Text style = {[styles.centeredText, {color: "#1A515F", fontWeight:"600"}]}>{t("chatwitha")}</Text>
                <Text style = {[styles.centeredText, {color: "#1A515F", fontWeight:"600"}]}>{t("professional")}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{marginTop:35, flexDirection:"row", justifyContent: "center"}}>
            <TouchableOpacity onPress = {onHospital}>
              <View style={[styles.dashButton, {justifyContent: "center", backgroundColor: "#C7D3D6"}]}>
                <Image source = {require("./assets/hospital.png")} style = {styles.dashPic}></Image>
                <Text style = {[styles.centeredText, {color: "#1A515F", fontWeight:"600"}]}>{t("hospital")}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onEducation}>
              <View style={[styles.dashButton, {justifyContent: "center", backgroundColor: "#C7D3D6"}]}>
                <Image source = {require("./assets/education.png")} style = {styles.dashPic}></Image>
                <Text style = {[styles.centeredText, {color: "#1A515F", fontWeight:"600"}]}>{t("education")}</Text>
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
          
            <TouchableOpacity style = {[styles.appointment, {alignItems: "center"}]} onPress={ ()=>{ Linking.openURL('https://www.kelsey-seybold.com/')}} >
              <Text style = {[styles.text]}>Kelsey Seybold - Thyroid Checkup February 10, 2024 at 3:15 - 3:45 pm</Text>
              
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.appointment, {alignItems: "center"}]} onPress={ ()=>{ Linking.openURL('https://www.kelsey-seybold.com/')}}>
              <Text style = {[styles.text]}>Kelsey Seybold - Bone Density Scan March 24, 2024 at 10:30 - 11 am</Text>
              
            </TouchableOpacity>
          
        </View>
        
      </View>
      <Text style = {[styles.link]}>Want to schedule an appointment?</Text>

      <Image source = {require("./assets/reading.png")} style={{ width: 330, height: 500, resizeMode: "contain" }}></Image>
    </ScrollView>
  )
}

//ChatGPT
const GPT = () => {
  return (
    <View style = {styles.container}>
      <ChatGPT/>
    </View>
  )
}

const Language = () => {
  
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);
  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  }
  const onPressHandler = event => setText("Changed text");
  state = {
    textValue: 'Change me'
  }
  onEs = () => {
    this.setState({
      textValue: 'Espanol'
    })
  }



  const [welcomeText, setWelcomeText] = useState('Welcome to StaySafe!');

  const enPress = () => {
    // Change the welcome text when TouchableOpacity is pressed
    setWelcomeText('Welcome to StaySafe!');
  };
  const esPress = () => {
    // Change the welcome text when TouchableOpacity is pressed
    setWelcomeText('¡Bienvenido a StaySafe!');
  };
  const frPress = () => {
    // Change the welcome text when TouchableOpacity is pressed
    setWelcomeText('Bienvenue sur StaySafe!');
  };
  const gePress = () => {
    // Change the welcome text when TouchableOpacity is pressed
    setWelcomeText('Willkommen bei StaySafe!');
  };
  const hiPress = () => {
    // Change the welcome text when TouchableOpacity is pressed
    setWelcomeText('स्टेसेफ में आपका स्वागत है!');
  };


  return (
    <View>
      <ScrollView>
        <TouchableOpacity style = {[styles.socialButton,]} >
          <Button title = "Arabic"></Button>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.socialButton,]} onPress = {enPress}>
          <Button title = "English"></Button>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.socialButton,]} onPress = {esPress}>
          <Button title = "Español"></Button>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.socialButton,]} onPress = {frPress}>
          <Button title = "French"></Button>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.socialButton,]} onPress = {gePress}>
          <Button title = "German"></Button>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.socialButton,]} onPress = {hiPress}>
          <Button title = "Hindi"></Button>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.socialButton,]}>
          <Button title = "Japanese"></Button>
        </TouchableOpacity>
      
      </ScrollView>
      <Text style={[styles.welcomeText]}>{welcomeText}</Text>
    </View>
    
  );
  
}

const Messages = () => {
  /*
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  //This function checks if device has sms capabilities
  const checkSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();

    if (isAvailable){
      alert('SMS is available on this device');

    }else{
      alert('SMS is not available on this device');
    }
  }
  //This function sends message to number using the native SMS app
  const sendSMS = async () => {
    const {result} = await SMS.sendSMSAsync(number, message);
    if (result === 'sent'){
      alert('Message sent successfully')
    }
  }

  return (
    <ScrollView style ={styles.container}>
      <View style = {{marginTop:250}}>
        <Button
          title = 'Check SMS Availability'
          onPress = {checkSMS}
          

        />
        <TextInput
          style = {styles.input}
          placeholder = 'Enter phone number'
          value = {number}
          onChangeText = {setNumber}
          keyboardType = 'phone-pad'
        />
        <TextInput
          style = {styles.input}
          placeholder = 'Enter message'
          value = {message}
          onChangeText = {setMessage}
          multiline
        />
        <Button
          title = 'Send Message' onPress = {sendSMS}
        />
      </View>
      
    </ScrollView>
  )
  */
}

const Hospital = () => {
  return (
    <ScrollView style ={styles.container}>
      <TouchableOpacity style={[{marginTop:35, flexDirection:"row", justifyContent: "center"}]} onPress={ ()=>{ Linking.openURL('https://www.google.com/maps/place/Kelsey-Seybold+Clinic+%7C+Fort+Bend+Medical+and+Diagnostic+Center/@29.6106636,-95.6426212,17.25z/data=!4m6!3m5!1s0x8640e6cdf2770111:0xd2dc07dc945f1977!8m2!3d29.6104376!4d-95.6409306!16s%2Fg%2F1wz532mr?entry=ttu')}}>
            <View style = {[styles.appointment, {flexDirection:"column", justifyContent:"center"}]}>
              <Image source = {require("./assets/map.png")} style = {{width:350, height:400, marginHorizontal:0}}></Image>
          
            </View>
      </TouchableOpacity>
      <Text style = {[styles.text, {fontWeight: "bold"}]}>
        Kelsey Seybold Clinic
      </Text>
      <Text style = {[styles.text, ]}>
        Open: 8 AM - 5 PM CST
      </Text>
      <Text style = {[styles.text, ]}>
        Address: 11555 University Blvd, Sugar Land, TX 77478
      </Text>
      <Text style = {[styles.text, ]}>
        Phone: (713) 442-9100
      </Text>

    </ScrollView>
  )
}


const Education = () => {
  return (
    <ScrollView style ={styles.container}>
      <TouchableOpacity style={[{marginTop:35, flexDirection:"row", justifyContent: "center"}]} onPress={ ()=>{ Linking.openURL('https://www.youtube.com/watch?v=Do-s0LXmwn4')}}>
            <View style = {[styles.appointment, {flexDirection:"column", justifyContent:"center"}]}>
              <Image source = {require("./assets/l1.png")} style = {{width:170, height:100, marginHorizontal:5}}></Image>
              <Text style = {[styles.text, {fontWeight: "bold"}]}>What is osteoarthritis?</Text>
              <Text style = {styles.text}>YouTube Video</Text>
            </View>
      </TouchableOpacity>

      <TouchableOpacity style={[{marginTop:35, flexDirection:"row", justifyContent: "center"}]} onPress={ ()=>{ Linking.openURL('https://www.youtube.com/watch?v=c91ggTlEGv8')}}>
            <View style = {[styles.appointment, {flexDirection:"column", justifyContent:"center"}]}>
              <Image source = {require("./assets/l2.png")} style = {{width:170, height:100, marginHorizontal:5}}></Image>
              <Text style = {[styles.text, {fontWeight: "bold"}]}>Chronic Disease</Text>
              <Text style = {styles.text}>YouTube Video</Text>
            </View>
      </TouchableOpacity>

      <TouchableOpacity style={[{marginTop:35, flexDirection:"row", justifyContent: "center"}]} onPress={ ()=>{ Linking.openURL('https://my.clevelandclinic.org/health/diagnostics/17649-blood-pressure')}}>
            <View style = {[styles.appointment, {flexDirection:"column", justifyContent:"center"}]}>
              <Image source = {require("./assets/article.jpg")} style = {{width:170, height:140, marginHorizontal:5}}></Image>
              <Text style = {[styles.text, {fontWeight: "bold"}]}>Blood Pressure</Text>
              <Text style = {styles.text}>Article</Text>
            </View>
      </TouchableOpacity>

      <TouchableOpacity style={[{marginTop:35, flexDirection:"row", justifyContent: "center"}]} onPress={ ()=>{ Linking.openURL('https://www.health.harvard.edu/topics/arthritis')}}>
            <View style = {[styles.appointment, {flexDirection:"column", justifyContent:"center"}]}>
              <Image source = {require("./assets/article.jpg")} style = {{width:170, height:140, marginHorizontal:5}}></Image>
              <Text style = {[styles.text, {fontWeight: "bold"}]}>General Arthritis Info</Text>
              <Text style = {styles.text}>Article</Text>
            </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

//Medications
const Medications = props => {
  const onGPT = () => {
    props.navigation.navigate('Virtual Assistant');
    
  };
  
  return (
    <ScrollView style ={styles.container}>
      <View>
        <View>
          <TouchableOpacity style={{marginTop:35, flexDirection:"row", justifyContent: "center"}} onPress={ ()=>{ Linking.openURL('https://www.arthritis.org/drug-guide/medication-topics/understanding-methotrexate')}}>
            <View style = {[styles.appointment, {flexDirection:"column"}]}>
                <Text style = {[styles.text, {fontWeight: "bold"}]}>Oral Methotrexate</Text>
                <Text style = {styles.text}>Arthritis Prescription</Text>
            </View>

            
              <View>
                <Image source = {require("./assets/methotrexate.jpg")} style = {[styles.dashPic, {marginHorizontal: 10}]}></Image>
              </View>
            

          </TouchableOpacity>
          
          
            <View style = {[styles.appointment, {flexDirection:"column"}]}>
              <Text style = {[styles.text, {fontWeight: "bold"}]}>Doctor Note:</Text>
              <Text style = {styles.text}>Take 7.5 mg per week</Text>

              
            </View>
            
          
        </View>

        <View style = {[styles.footerInfo, {flexDirection:"column"}]}>
          <Text>Got a question?</Text>
          
            
            <Text style={{}}>   </Text>
            <TouchableOpacity style= {[{}]} onPress = {onGPT}>
            <Text style = {[styles.text, styles.link]}>Ask a professional</Text>
            </TouchableOpacity>
          
          
        </View>
      </View>
      <Image source = {require("./assets/dog.png")} style={{ width: 330, height: 440, resizeMode: "contain" }}></Image>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  welcomeText:{
    fontFamily: "Avenir Next",
    fontSize: 20,
    color: "#1D2029",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  languageList:{
    flex:1,
    justifyContent:'center',
    padding:10,
    marginVertical: 30

    
  },
  container:{
    flex:1,
    backgroundColor:"#EFF1F2",
    paddingHorizontal:30
  },
  text: {
    fontFamily: "Avenir Next",
    color: "#1D2029"
  },
  centeredText: {
    fontFamily: "Avenir Next",
    fontSize: 15,
    color: "#1D2029",
    textAlign: "center"
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
  footerInfo:{
    flexDirection: "row",
    marginHorizontal: 0,
    marginVertical: 15,
    paddingVertical: 0,
    paddingHorizontal: 20,
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
    color:"#C7D3D6"

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
  medPic:{
    width:200,
    height:200,
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
  input:{
    width:300,
    height:40,
    borderColor:'gray',
    borderWidth:StyleSheet.hairlineWidth,
    margin:10,
    padding:10
  }

});

export default App;
