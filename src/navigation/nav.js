import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import Orderdetails from "../screens/order/orderdetails";
import { OrderScreen } from "../screens/order/orderscreen";
import { Menu } from "../screens/menu/menu";
import { Basket } from "../screens/checkout/basket";

import { Detail } from "../screens/checkout/detail";
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import {createMaterialBottomTabNavigator,} from "@react-navigation/material-bottom-tabs";
import Login from "../screens/Login";







const Stack= createNativeStackNavigator();

const RootNav=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false,}}  initialRouteName="Login">

                <Stack.Screen name="Login" component={Login} /> 
                
                <Stack.Screen name="Home" component={HomeTab} /> 
    
        </Stack.Navigator>
                 
    )
}


const Tab= createMaterialBottomTabNavigator()

const HomeTab=()=> {
  return (
    
      <Tab.Navigator barStyle={{backgroundColor:'white'}}>
          
          
          <Tab.Screen name="Home"  component={HomeStackNav} options={{tabBarIcon:({color})=><AntDesign name="home" size={24} color={color} /> }  }  />
          
          
          <Tab.Screen name="Orders" component={OrderStackNav} options={{tabBarIcon:({color})=><Octicons name="checklist" size={24} color={color} />}}/>
          
          
          
          <Tab.Screen name="Profile" component={Login} options={{tabBarIcon:({color})=><AntDesign name="user" size={24} color={color} />}} />
        
      </Tab.Navigator>

  );
}





const HomeStack =createNativeStackNavigator()


const HomeStackNav=()=> {
 
    return (
      <HomeStack.Navigator>
          <HomeStack.Screen name="Restaurants" component={HomeScreen} options={{headerBackVisible:false}} />
          <HomeStack.Screen name="Menu" component={Menu} options={{headerBackVisible:false}}/>
          <HomeStack.Screen name="Dish" component={Detail} options={{headerBackVisible:false}}/>
          <HomeStack.Screen name="Basket" component={Basket} options={{headerBackVisible:false}}/>
      </HomeStack.Navigator>
     
    
    )
  
}
const  OrderNav= createNativeStackNavigator()

const OrderStackNav=()=> {
 
  return (
    <OrderNav.Navigator>
        <OrderNav.Screen name="OrderScreens" component={OrderScreen} />
        <OrderNav.Screen name="OrderDetails" component={Orderdetails} />
        
    </OrderNav.Navigator>
   
  
  )

}



export default RootNav