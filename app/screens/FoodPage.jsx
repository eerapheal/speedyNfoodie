import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartCountContext } from '../context/CartCountContext';

const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;
  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRestaurant] = useState(1);
  const [count, setCount] = useState(1);
  const [preferences, setPreferences] = useState('');
  const { cartCount, setCartCount } = useContext(CartCountContext);

  return (
    <View>
      <Text>FoodPage</Text>
    </View>
  )
}

export default FoodPage

const styles = StyleSheet.create({})