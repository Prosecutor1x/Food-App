import React from 'react'
import { View,Text,Image,FlatList,StyleSheet } from 'react-native'









export const Header = ({restaurant}) => {
  return (
    <View style={styles.page}>
        <Image source={{uri: restaurant.image}} style={styles.image}/>
        <View style={styles.bod}>
            

           

            <View>

                <Text style={styles.name}>{restaurant.name}     </Text>
                <Text style={styles.rating}>{restaurant.rating}⭑</Text>
                
                <Text style={styles.price}> Delivery Fee : Rs {restaurant.deliveryFee}</Text>
                <Text style={styles.  timeAndDistance}>Expected delivery between {restaurant.maxDeliveryTime} - {restaurant.minDeliveryTime} minutes</Text>
               
                

            </View>
        </View>  
        <Text style={styles.text}>	• Menu</Text>
   </View>
  )
}

const styles = StyleSheet.create({

    image:{
        width:'100%',
        aspectRatio:2/2,
        borderRadius:8
    },
    text:{
        fontSize:18,
        paddingBottom:20,
        paddingTop:20,
        paddingLeft:5

    },
    page:{
        flex:1,
        paddingTop:30,
        padding:5
       
        
        

    },
    name:{

        fontSize:50,
        fontWeight:"500", 
        
        marginTop:10,       
        
    
      },
      timeAndDistance:{
        fontSize:12,
        marginBottom:5,
        marginTop:2,
      
        marginLeft: 5,
        color:"grey",
    
      },
      price:{
        fontSize:18,
        
        color:"grey",
        marginTop:6,
      },
      icon:{
        
        position:"absolute",
        top:40,
        
        paddingLeft:10,
        
        
        
        
      
        

      },
      bod:{

        // borderBottomColor:'Lightgrey',
        // borderBottomWidth:1,
        // paddingBottom:10,
        paddingLeft:5
        

      },
      rating:{
        fontSize:20,
        color:"red",
        marginLeft:6


      }


});