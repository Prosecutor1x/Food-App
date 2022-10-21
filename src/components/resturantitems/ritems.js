import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from '../../../styles';
import {useNavigation} from '@react-navigation/native';

const ResturantItem = ({restaurant}) => {
  const navigation = useNavigation();
  onPress = () => {
    navigation.navigate('Menu', {id: restaurant.id});
  };

  return (
    <Pressable onPress={onPress} style={styles.resturant}>
      <Image source={{uri: restaurant.image}} style={styles.image} />

      <View style={styles.sub}>
        <View>
          <Text style={styles.name}>{restaurant.name}</Text>
          <Text style={styles.price}>
            {' '}
            Delivery Fee : Rs {restaurant.deliveryFee}
          </Text>
          <Text style={styles.timeAndDistance}>
            Expected delivery between {restaurant.maxDeliveryTime} -{' '}
            {restaurant.minDeliveryTime} minutes
          </Text>
        </View>

        <View style={styles.rating}>
          <Text>{restaurant.rating} </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ResturantItem;
