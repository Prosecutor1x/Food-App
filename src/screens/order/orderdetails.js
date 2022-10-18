import { View, Text,StyleSheet,Image, FlatList } from 'react-native'
import React from 'react'
import orders from '../../assets/data/orders.json';
import restaurants from '../../assets/data/restaurants.json'

import { BasketDish } from '../../components/BasketDish';


const order=orders[0]
const OrderdetailsHeader = () => {
  return (
    
        <View style={styles.page}>
          <Image source={{uri: order.Restaurant.image}} style={styles.image}/>
          <View style={styles.bod}>
              

            

              <View style={{borderBottomWidth:1,paddingVertical:5}}>

                  <Text style={styles.name}>{order.Restaurant.name}     </Text>
                  <Text style={styles.rating}>{order.Restaurant.rating}⭑ </Text>
                  
                  <Text style={styles.price}> Delivery Fee : Rs {order.Restaurant.deliveryFee}</Text>
                  <Text style={{marginHorizontal:5,marginVertical:5,color:'grey'}}>{order.status} : 30 mins ago</Text>
                  <Text style={styles.  timeAndDistance}>Expected delivery between {order.Restaurant.minDeliveryTime} - {order.Restaurant.maxDeliveryTime} minutes</Text>
                
                  

              </View>
              <Text style={styles.text}>Your orders</Text>
          </View>  
         
        </View>
    
  )
}







const Orderdetails = () => {
  return (
    <View style={{padding:5}}>
      <FlatList 
      
      ListHeaderComponent={OrderdetailsHeader}
      data={restaurants[0].dishes} 
      renderItem={({item})=> <BasketDish  basket={item}/>}
      showsVerticalScrollIndicator={false}
      
      />
    </View>
  )
}

export default Orderdetails

const styles = StyleSheet.create({

  image:{
      width:'100%',
      aspectRatio:3/3,
      borderRadius:8
  },
  text:{
      fontSize:25,
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
      
      marginTop:5,       
      
  
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