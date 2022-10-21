import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import OrderList from '../../components/orderlist';
import orders from '../../assets/data/orders.json';

import React from 'react';

export const OrderScreen = () => {
  return (
    <View style={styles.page}>
      <Text
        style={{
          fontSize: 40,
          fontWeight: '500',
          padding: 20,
          paddingVertical: 10,
          backgroundColor: '#D3D3D3',
          textAlign: 'center',
          borderRadius: 8,
          marginBottom: 5,
        }}>
        Orders
      </Text>

      <View style={{height: 1, backgroundColor: 'black'}} />

      <FlatList
        data={orders}
        renderItem={({item}) => <OrderList order={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: '100%',
    padding: 15,
    paddingTop: 40,
  },
});
