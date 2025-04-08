import { View, ScrollView, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
const SignUp = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <View className="flex-row m-4 items-center justify-between px-4">
        <Text className="text-white text-2xl font-bold">Index</Text>
        <Link className="text-white text-2xl font-bold" href="/cars">
          {" "}
          SignUp
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
