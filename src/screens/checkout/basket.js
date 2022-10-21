import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import restaurants from '../../assets/data/restaurants.json';

import {Ionicons} from '@expo/vector-icons';
import {BasketDish} from '../../components/BasketDish';
import {useNavigation} from '@react-navigation/native';

const basket = restaurants[1].dishes[3];
const restaurant = restaurants[1];

export const Basket = () => {
  const navo = useNavigation();

  return (
    <View style={styles.page}>
      <View style={styles.icon}>
        <Ionicons
          name="arrow-back-circle"
          size={42}
          color="black"
          onPress={navo.goBack}
        />
      </View>
      <Text style={styles.name}>{restaurant.name}</Text>

      <Text style={styles.item}>Your Items</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({item}) => <BasketDish basket={item} />}
      />

      <View style={styles.separator} />

      <View style={styles.psrow}>
        <View style={styles.proww}>
          <Text>Sub -Total</Text>
        </View>

        <View>
          <Text>1</Text>
        </View>
      </View>

      <View style={styles.prow}>
        <View style={styles.proww}>
          <Text>Total</Text>
        </View>

        <View>
          <Text>Rs {basket.price}</Text>
        </View>
      </View>

      <Pressable style={styles.button} onPress={() => navo.navigate('Orders')}>
        <Text style={styles.text}>Place Order</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    paddingVertical: 30,
    padding: 10,
  },
  name: {
    fontSize: 40,
    fontWeight: '500',
    paddingTop: 40,
    marginVertical: 20,
  },
  nameb: {
    fontSize: 20,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  icon: {
    paddingTop: 5,
  },
  price: {
    marginVertical: 10,
    fontSize: 20,

    paddingHorizontal: 20,
  },
  quantity: {
    backgroundColor: 'white',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 3,
    marginRight: 5,
  },
  item: {
    fontSize: 20,
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 2,
  },
  roww: {
    flex: 1,
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: 'black',

    marginTop: 'auto',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  prow: {
    flexDirection: 'row',
    padding: 10,
  },
  proww: {
    flex: 1,
  },
  psrow: {
    flexDirection: 'row',
    padding: 10,
  },
});
