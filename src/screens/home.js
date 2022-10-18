
import {  View ,FlatList,} from 'react-native';

import ResturantItem from '../components/resturantitems/ritems';

import restaurants from '../assets/data/restaurants.json'
import styles from '../../styles';


export default function HomeScreen() {
  return (
    
      
        <View style={styles.container}>
         



          <FlatList 
            data={restaurants} 
            renderItem={({item})=><ResturantItem restaurant={item} />}
            showsVerticalScrollIndicator={false}
            
          
            
            
            />




       
        </View>
      
    
    
  );
}

