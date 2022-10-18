import React from "react";
import { StyleSheet } from "react-native";




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:5,
      
    },
    resturant:{
      width:"100%",
      marginVertical:10,
      paddingTop:30,
    },
    image:{
     
      width:"100%",
      aspectRatio:5/3,
      borderRadius:5,
      
      
    },
    name:{
      fontSize:30,
        
      marginBottom:2,
      marginTop:8,
      
  
    },
    timeAndDistance:{
      fontSize:12,
      
      marginVertical:2,
      marginLeft: 5,
      color:"grey",
  
    },
    price:{
      fontSize:18,
      
      color:"grey",
      marginTop:10,  
      
    },
    sub:{
        flexDirection:"row",
        alignItems:"center",

    },
    rating:{

       
        
        marginLeft:'auto',
       
        borderRadius:15,
        backgroundColor:"#D3D3D3",
       
        width:30,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        padding:2,
        fontWeight:"bold",
        marginRight:2
    }
  
  });
  

  export default styles

