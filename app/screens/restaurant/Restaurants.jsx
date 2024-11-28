import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantNavigation from '../../navigation/RestaurantNavigation'
import NetworkImage from '../../components/NetworkImage'
import { COLORS, SIZES } from '../../constants/theme'
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { RatingInput } from "react-native-stock-star-rating";
const Restaurants = ({ navigation }) => {

  const route = useRoute();
  const item = route.params
  return (
    <View>
      <View style={{ height: 200 }}>
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
        <NetworkImage data={item?.imageUrl} height={SIZES.height / 3.4} width={SIZES.width} radius={15} />
        <View style={styles.rating}>
          <View style={styles.innerRating}>
            <RatingInput
              rating={Number(item.rating)}
              size={24}
              maxStars={5}
              setRating={item.rating}
              bordered={false}
              color={COLORS.lightWhite}
            />
            <TouchableOpacity style={styles.ratingBtn} onPress={() => { }}>
              <Text style={styles.ratingText}>Rate Store</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ height: 200 }}>

      </View>

      <View style={{ height: 600 }}>
        <RestaurantNavigation />
      </View>
    </View>
  )
}

export default Restaurants

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

  rating: {
    position: 'absolute',
    height: 50,
    width: "100%",
    bottom: -14,
    zIndex: 999,
    backgroundColor: COLORS.primary1,
    justifyContent: 'center',
    borderRadius: 15,
  },

  innerRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12
  },

  ratingBtn: {
    borderColor: COLORS.lightWhite,
    borderWidth: 1,
    padding: 6,
    borderRadius: 12,
  },

  ratingText: {
    fontFamily: 'regular',
    color: COLORS.lightWhite,
    fontSize: 16,
    fontWeight: 'medium',
  }
})