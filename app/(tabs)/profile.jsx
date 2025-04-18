import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { settings } from "@/src/constants/data";
import { icons } from "@/src/constants";
import { router } from "expo-router";
import CustomButton from "@/src/components/CustomButton.tsx";

const Profile = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <SafeAreaView className="bg-black h-full">
        <View className="flex-row items-center justify-between px-4">
          <Text className="text-white text-2xl font-bold">Cars</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Profile;
