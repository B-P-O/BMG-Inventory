import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Details = () => {
  return (
    <SafeAreaView className="bg-black flex-1">
      <View className="flex-row items-center justify-between px-4">
        <Text className="text-white text-2xl font-bold">
          Details
        </Text>
        </View>
    </SafeAreaView>
  );
};
export default Details;