import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import Dish from '../../components/resturantitems/dish';
import restaurants from '../../assets/data/restaurants.json';
import {Header} from '../../components/resturantitems/header';
import {useRoute, useNavigation} from '@react-navigation/native';

const restaurant = restaurants[0];

export const Menu = () => {
  const route = useRoute();
  const id = route.params?.id;

  const navigation = useNavigation();

  return (
    <View style={{padding: 5}}>
      <FlatList
        data={restaurant.dishes}
        renderItem={({item}) => <Dish dish={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
      />

      <View style={styles.icon}>
        <Ionicons
          name="arrow-back-circle"
          size={42}
          color="white"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3 / 3,
  },
  text: {},
  page: {
    flex: 1,
    paddingTop: 30,
  },
  name: {
    fontSize: 50,
    fontWeight: '500',

    marginTop: 20,
  },
  timeAndDistance: {
    fontSize: 12,
    marginBottom: 5,
    marginTop: 2,

    marginLeft: 5,
  },
  price: {
    fontSize: 18,

    color: 'grey',
    marginTop: 6,
  },
  icon: {
    position: 'absolute',
    top: 33,

    paddingLeft: 10,
  },
  bod: {
    borderBottomColor: 'Lightgrey',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginVertical: 10,
  },
});
