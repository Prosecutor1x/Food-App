import { View,Text,StyleSheet, FlatList } from "react-native";








export const BasketDish=({basket})=>{

    
    

    return(
        <View style={styles.row} >
            <View style={styles.quantity}><Text style={{color:'black'}}>1</Text></View>

            <View  style={styles.roww}>
                <Text style={styles.nameb}>{basket.name}</Text>
                
        
                <Text style={styles.description}>{basket.description}</Text>
            </View>
        
            <View>
                <Text  style={styles.price}>Rs {basket.price}</Text>
            </View>

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
        paddingTop:40,
        marginVertical:20
        

    },
    nameb:{
        fontSize:20,
        fontWeight:"600",

    },
    separator:{

        height:1,
        backgroundColor:"black",
        marginVertical:10,

    },
    icon:{
        paddingTop:30
    },
    price:{
        marginVertical:10,
        fontSize:20,
        
        paddingHorizontal:20
    },
    quantity:{
        backgroundColor:'white',
        paddingVertical:2,
        paddingHorizontal:8,
        borderRadius:3,
        marginRight:5

        
       
    },
    item:{
        fontSize:20,
        marginVertical:10,
    },
    row:{
        flexDirection:"row",
        backgroundColor:'#d3d3d3',
        padding:10,
        borderRadius:10,
        alignItems:'center' ,
        marginVertical:2
       
    },
    roww:{
        flex:1,
        paddingHorizontal:5,
        
    },
    button:{
        backgroundColor:'black',
        
        marginTop:'auto',
        padding:20,
        borderRadius:10, 
        alignItems:'center' 

    },
    text:{
        color:'white',
        fontSize:20,
    },
    prow:{
        flexDirection:"row",
        padding:10,
    },
    proww:{
        flex:1
    },
    psrow:{
        flexDirection:"row",   
        padding:10,    
    },


})
