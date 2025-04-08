

import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const home = () => {
  

  return (
    <SafeAreaView className="bg-black h-full">
    <View className="flex-row items-center justify-between px-4"> 
     <Text className="text-white text-2xl font-bold">
       Cars</Text>
     </View>
   </SafeAreaView>
  );
};

export default home;