

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


const Login = () => {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isSignedIn,setIsSignedIn]=useState(false);
        const nav=useNavigation()
    
    return (
        <View style={styles.container}>
      
        <StatusBar style="auto" />
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email         "
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
            />
        </View>
    
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
            />
        </View>
    
        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.loginBtn} onPress={(isSignedIn)=> setIsSignedIn(isSignedIn)}>
            <Text style={{color:'white'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rgrBtn} onPress={nav.navigate('Home')}>
            <Text style={{color:'black'}}>REGISTER</Text>
        </TouchableOpacity>
        </View>
  );
}

export default Login
  


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    
     
      paddingTop:300
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "grey",
      borderRadius: 8,
      width: "90%",
      height: 45,
      
      alignItems: "center",
      alignSelf:'center',
      marginVertical:5
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      alignItems:'center'

    },
   
    forgot_button: {
      height: 30,
      marginBottom: 3,
      alignSelf:'center',
      marginVertical:15
    },
   
    loginBtn: {
      width: "50%",
      borderRadius: 8,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 50,
      backgroundColor: "black",
      
      alignSelf:'center'
    },
    rgrBtn:{
        width: "50%",
        borderRadius: 8,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        backgroundColor: "white",
        
        alignSelf:'center',
        borderWidth:1,
        borderColor:'black'
        
    }
  });