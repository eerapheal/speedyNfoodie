import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FoodComponent from './foodComponent'
import uidata from '../constants/uidata'

const NearestRestaurants = () => {
  const renderItem = ({ item }) => (
    <FoodComponent item={item} onPress={() => { }} />
  )
  return (
    <View style={{ marginLeft: 12, marginBottom: 10 }}>
      <FlatList
        data={uidata?.foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap: 10 }}
        scrollEnabled
        renderItem={renderItem}
      />
    </View>
  )
}

export default NearestRestaurants

const styles = StyleSheet.create({})