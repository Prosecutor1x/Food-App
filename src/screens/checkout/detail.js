import { View,Text,StyleSheet, Pressable } from "react-native";
import restaurants from '../../assets/data/restaurants.json'
import{AntDesign} from '@expo/vector-icons'

import React from 'react'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";




const dish = restaurants[2].dishes[3]
export const Detail = () => {
    const navb= useNavigation()

    const [quantity,setQuantity]=useState(1);

    const getTotal=()=>{
        return(
            (dish.price*quantity).toFixed(2)
        )
    }

    
    const onMinus=()=> {
        
            
            if (quantity>1){
                return(
                    setQuantity(quantity-1)
                )
            }
            
    }
     
    const onPlus=()=> {
        return(
            setQuantity(quantity+1)

        )
    }


  return (
    <View style={styles.page}>
        <Text style={styles.name}>{dish.name}</Text>
        <Text style={styles.description}>{dish.description}</Text>
        <Text  style={styles.price}>Rs {dish.price}</Text>
        <View style={styles.separator}/>

        <View style={styles.icon}>
            <AntDesign name="minuscircleo" size={40} color={"black"} onPress={onMinus} />
            <Text style={styles.quantity}>{quantity}</Text>
            <AntDesign name="pluscircleo" size={40} color={"black"} onPress={onPlus}/>
        </View>

        <Pressable style={styles.button} onPress={()=>navb.navigate('Basket')}>
            <Text style={styles.text} >Add  {quantity} to the Basket: -  Rs {getTotal()} /-</Text>
        </Pressable>

    </View>
  )
}


const styles=StyleSheet.create({

    page:{
        flex:1,
        width:'100%', 
        paddingVertical:30,
        padding:10,
    },
    name:{
        fontSize:40,
        fontWeight:"500",
        marginVertical:10,
       


    },
    price:{
        fontSize:20,
        

    },
    description:{
        color:"gray",
        marginBottom:10,

    },
    separator:{
        height:1,
        backgroundColor:"grey",
        marginVertical:10,

    },
    icon:{
        flexDirection:"row",
        
        justifyContent:"center",
        paddingVertical:20
       
    

        
    },
    quantity:{
        fontSize:40,
        paddingHorizontal:15,
        
        
    },
    button:{
        backgroundColor:'black',
       
        alignItems:'center',
        marginTop:'auto',
        padding:20,
        borderRadius:10

    },
    text:{
        color:'white',
        fontSize:20,
      
        

    }

})