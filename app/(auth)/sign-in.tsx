import {
  View,
  ScrollView,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className=" h-full">
      <ScrollView>
        <View className="flex-row m-4 items-center justify-between px-4">
          <Text className="text-white text-2xl font-bold">Index</Text>
          <Link className="text-black-200 text-2xl font-bold" href="/home">
            {" "}
            Home
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
