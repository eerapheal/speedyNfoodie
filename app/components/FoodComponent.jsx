import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../constants/theme'
import NetworkImage from './NetworkImage'

const FoodComponent = ({ item, onPress }) => {

  return (
    <TouchableOpacity style={styles.wrapper}>
      <NetworkImage
        data={item?.imageUrl[0]}
        width={SIZES.width - 80}
        height={SIZES.height / 5.8}
        radius={16}
        mode={'cover'}
      />
      <Text style={styles.heading}>
        {item?.title}
      </Text>
      <Text style={styles.small}>
        {item?.time} - Delivery
      </Text>
    </TouchableOpacity>
  )
}

export default FoodComponent

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 15,
    backgroundColor: COLORS.lightWhite,
    padding: 8,
    borderRadius: 16,
  },
  heading: {
    fontSize: 13,
    fontFamily: 'regular',
    color: COLORS.gray,
  },
  small: {
    fontSize: 12,
    fontFamily: 'regular',
    color: COLORS.gray,
  },
})