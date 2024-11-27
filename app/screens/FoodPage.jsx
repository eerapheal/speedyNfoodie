import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { CartCountContext } from '../context/CartCountContext';
import { COLORS, SIZES } from '../constants/theme';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-web';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Counter from '../components/Counter';

const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;
  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRestaurant] = useState(1);
  const [count, setCount] = useState(1);
  const [preference, setPreference] = useState('');
  // const { cartCount, setCartCount } = useContext(CartCountContext);
  console.log(additives)
  const handleAdditives = (newAdditive) => {
    setAdditives((prevAdditives) => {
      const exists = prevAdditives.some((additive) => additive.id === newAdditive.id);
      if (exists) {
        return prevAdditives.filter((additive) => additive.id !== newAdditive.id);
      } else {
        return [...prevAdditives, newAdditive];
      }
    })
  }
  return (
    <View style={{ backgroundColor: COLORS.lightWhite, height: SIZES.height }}>
      <View>
        <Image
          source={{ uri: item?.imageUrl[0] }}
          style={{ width: SIZES.width, height: SIZES.height / 4, borderBottomRightRadius: 30 }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Ionicons name='chevron-back-circle' size={40} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}
          style={styles.shareBtn}
        >
          <MaterialCommunityIcons name='share-circle' size={40} color={COLORS.primary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}
          style={{ position: 'absolute', bottom: 20, right: 3 }}
        >
          <View style={styles.restBtn}>
            <Text style={{ fontFamily: 'bold', color: COLORS.lightWhite, }}>View Store</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={[styles.title, { color: COLORS.primary }]}>₦{(item?.price + totalPrice) * count}</Text>

        </View>
        <Text style={styles.small}>{item?.description}</Text>

        <FlatList
          data={item?.foodTags}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
          horizontal
          scrollEnabled
          style={{ marginTop: 8 }}
          renderItem={({ item }) => (
            <View style={styles.tags}>
              <Text style={{ paddingHorizontal: 8, paddingVertical: 8, color: COLORS.lightWhite }}>{item}</Text>
            </View>
          )}
        />
        <Text style={[styles.title, { marginBottom: 5, marginTop: 20 }]}>Additives and Toppings</Text>
        <FlatList
          data={item.additives}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          style={{ marginTop: 10 }}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10, alignItems: 'center' }}>

              <BouncyCheckbox
                size={20}
                unfillColor='#FFFFFF'
                fillColor={COLORS.primary}
                innerIconStyle={styles.small}
                text={item.title}
                onPress={() => { handleAdditives(item) }}
              />
              <Text style={styles.small}>₦{item.price}</Text>
            </View>
          )}
        />
        <Text style={[styles.title, { marginBottom: 7, marginTop: 7 }]}>Preferences</Text>
        <View style={styles.input}>
          <TextInput
            style={{ flex: 1, borderWidth: "none" }}
            placeholder="Add your preferences here"
            onChangeText={(value) => setPreference(value)}
            value={preference}
            autoCapitalize={'none'}
            autocorrect={false}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
          <Text style={[styles.title, { marginBottom: 10 }]}>
            Quantity
          </Text>
          <Counter count={count} setCount={setCount} />
        </View>
      </View>
      <View style={{ left: 10, top: 40 }}>
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <View style={styles.suspended}>
            <View style={styles.cart}>
              <View style={styles.cartRow}>
                <TouchableOpacity onPress={() => { }} style={styles.cartBtn}>
                  <AntDesign name='pluscircleo' color={COLORS.lightWhite} size={20} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("order-page")} style={{ backgroundColor: COLORS.primary, paddingHorizontal: 80, borderRadius: 30 }}>
                  <Text style={[styles.title, { color: COLORS.lightWhite, marginTop: 4, alignItems: "center" }]}>Order</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { }} style={styles.cartBtn}>
                  <Text style={[styles.title, { color: COLORS.lightWhite, marginTop: 3, alignItems: "center" }]}>0</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default FoodPage

const styles = StyleSheet.create({
  backBtn: {
    marginLeft: 12,
    alignItems: 'center',
    zIndex: 999,
    position: 'absolute',
    top: SIZES.xxLarge,
  },
  shareBtn: {
    marginRight: 12,
    alignItems: 'center',
    right: 0,
    zIndex: 999,
    position: 'absolute',
    top: SIZES.xxLarge + 3,
  },
  restBtn: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    backgroundColor: COLORS.primary
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontFamily: "medium",
    color: COLORS.black,
  },
  small: {
    fontSize: 13,
    fontFamily: "regular",
    color: COLORS.gray,
    textAlign: "justify",
  },
  tags: {
    right: 10,
    marginHorizontal: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 8
  },
  input: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: COLORS.offwhite,
  },
  suspended: {
    position: "absolute",
    zIndex: 999,
    bottom: -15,
    width: "100%",
    alignItems: "center",
  },
  cart: {
    width: SIZES.width - 24,
    height: 60,
    justifyContent: "center",
    marginHorizontal: 20,
    backgroundColor: COLORS.primary1,
    borderRadius: 30,
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12
  },
  cartBtn: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.primary,
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center"
  },

})