import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RestaurantNavigation from '../../navigation/RestaurantNavigation'
import NetworkImage from '../../components/NetworkImage'
import { COLORS, SIZES } from '../../constants/theme'
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

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
})