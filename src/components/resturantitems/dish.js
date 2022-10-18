import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View,Text,Image, Pressable,StyleSheet } from "react-native"



const Dish=({dish})=>{
    const nav=useNavigation()
       
    return(
      <Pressable style={styles.res}  onPress={()=> nav.navigate('Dish')}>
           
        
            <View style={styles.resturant}>
                
                <Text style={styles.name}>{dish.name}</Text>

                <Text style={styles.description}numberOfLines={2}> {dish.description}</Text>


                <Text style={styles.price}>Rs : {dish.price}</Text>
            
            

           
            </View>
            <View style={styles.k}>


               {dish.image && ( <Image source={{uri: dish.image}} style={styles.Image}/>)}


            </View>
        </Pressable>
     
  
    )
  }


  export default Dish

  const styles = StyleSheet.create({

    name:{
        fontSize:25,
        fontWeight:"500",
        marginBottom:10
        
        
    },
    description:{

        fontSize:15,
        marginTop:1,
        color:'grey',
    },
    price:{
        color:'grey',
        fontSize:18,
        marginTop:20,
    },
    resturant:{
        marginVertical:2,
        paddingTop:5,
      
        flex:1,

        


    },
    Image:{
        
        aspectRatio:1,
        height:150,
        borderRadius:8,
    
        
        
        
        


    },
    res:{
        flexDirection:"row",
        borderBottomColor:'Lightgrey',
        borderBottomWidth:1,
        paddingLeft: 10 ,
        paddingVertical:10,    
    },
    k:{
       
        justifyContent:"center",
        alignContent:"center",
        
        paddingLeft:10
       
        
        
      
     },

  })