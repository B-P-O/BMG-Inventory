import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cars = () => {

  return (
    <SafeAreaView className="bg-black h-full">
     <View className="flex-row items-center justify-between px-4"> 
      <Text className="text-white text-2xl font-bold">Cars</Text>
      </View>
    </SafeAreaView>
  );
};
export default Cars;
