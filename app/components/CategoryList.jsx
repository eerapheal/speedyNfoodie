import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { FlatList } from 'react-native-web';
import uidata from '../constants/uidata';
import { TouchableOpacity } from 'react-native';
import CategoryItem from './CategoryItem';

const CategoryList = ({ setSelectedCategory, setSelectedSection, setSelectedValue }) => {
  const [selected, setSelected] = useState(null);

  const handleSelectedCategory = (item) => {
    if (selected == item?.value) {
      setSelected(null);
      setSelectedCategory(null);
      setSelectedSection(null);
      setSelectedValue(null);
    } else {
      setSelectedCategory(item?._id);
      setSelected(item?.value);
      setSelectedSection('category');
      setSelectedValue(item?.value);
    }
  };

  return (
    <FlatList
      data={uidata.categories}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ marginTop: 5 }}
      keyExtractor={(item) => item?._id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleSelectedCategory(item)}>
          <CategoryItem isSelected={selected === item?.value} category={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryList;
