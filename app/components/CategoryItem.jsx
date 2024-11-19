import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SHADOWS } from '../constants/theme'
const CategoryItem = ({ category, isSelected }) => {
  return (
    <View
      style={{
        backgroundColor: isSelected ? COLORS.gray : COLORS.lightWhite,
        marginLeft: 12,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 55,
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: isSelected ? COLORS.secondary : 'transparent',
        shadowColor: SHADOWS.small,
      }}
    >
      <Image
        source={{ uri: category.imageUrl }}
        style={{
          width: 30,
          height: 30,
        }}
      />
      <Text style={{ fontSize: 13, fontFamily: 'regular' }}>{category.title}</Text>
    </View>
  );
};

export default CategoryItem;
