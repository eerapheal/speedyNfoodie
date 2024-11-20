import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from './page.style'
import uidata from "../constants/uidata";
import { UserReversedGeoCode } from '../context/UserReversedGeoCode';
import { UserLocationContext } from "../context/UserLocationContext";
import HomeHeader from "../components/HomeHeader";
import ChoiceList from "../components/ChoiceList";
import CategoryList from "../components/CategoryList";
import Heading from "../components/Heading";
import NearbyRestaurants from "../components/NearbyRestaurants";
import Divider from "../components/Divider";
import NewFoodList from "../components/NewFoodList";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedChoice, setSelectChoice] = useState(null);

  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
          <HomeHeader />
          <ScrollView showsVerticalScrollIndicator={false}
            style={{ borderBottomEndRadius: 30, borderBottomStartRadius: 30 }}
          >

            <CategoryList
              setSelectedCategory={setSelectedCategory}
              setSelectedSection={setSelectedSection}
              setSelectedValue={setSelectedValue}
            />

            <ChoiceList
              setSelectedChoice={setSelectChoice}
              setSelectedSection={setSelectedSection}
            />

            <View>
              <Heading
                heading={'Nearby Restaurants'}
                onPress={() => { }}
              />
              <NearbyRestaurants/>

              <Divider />
              <Heading
                heading={'Try Something New'}
                onPress={() => { }}
              /> 

              <NewFoodList />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({

});
