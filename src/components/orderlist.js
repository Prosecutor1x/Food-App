import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const OrderList = ({order}) => {
  const navod = useNavigation();

  return (
    <Pressable
      style={{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
      }}
      onPress={() => navod.navigate('OrderDetails')}>
      <Image source={{uri: order.Restaurant.image}} style={styles.image} />

      <View>
        <Text style={{fontSize: 20, mwarginVertical: 10, paddingTop: 10}}>
          {order.Restaurant.name}
        </Text>
        <Text>3 Items $30</Text>
        <Text>2 days Ago</Text>
      </View>
    </Pressable>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  image: {
    height: 110,
    aspectRatio: 1,
    borderBottomWidth: 5,
    borderBottomColor: 'black',
    marginRight: 5,
    marginVertical: 10,
    borderRadius: 8,
  },
});
