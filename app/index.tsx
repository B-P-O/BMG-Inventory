import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  Image,
} from "react-native";
import images from "@/constants/images";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { router } from "expo-router";

import CustomButton from "@/components/CustomButton";

interface OnboardingItem {
  id: number;
  image: any;
  title: string;
  description: string;
}

interface RenderItemParams {
  item: OnboardingItem;
  index: number;
}

// Define CarouselRef interface properly
interface CarouselRef {
  scrollTo: (options: { index: number; animated?: boolean }) => void;
  next: () => void;
  prev: () => void;
}

const { width: screenWidth } = Dimensions.get("window");

const onboardingData: OnboardingItem[] = [
  {
    id: 1,
    image: images.AppLogo1,
    title: "Manage all your packages",
    description: "Keep track of your packages and deliveries",
  },
  {
    id: 2,
    image: images.AppLogo2,
    title: "Compare Products",
    description: "Compare products and make informed decisions",
  },
  {
    id: 3,
    image: images.AppLogo3,
    title: "Complete Inventory management",
    description: "manage your inventory with ease",
  },
];

export default function Home() {
  const carouselRef = useRef<CarouselRef>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSkip = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ index: onboardingData.length - 1 });
      setCurrentIndex(onboardingData.length - 1);
    }
  };

  const renderItem = ({ item, index }: RenderItemParams) => (
    <View
      className="items-center justify-center px-5"
      style={{ width: screenWidth }}
    >
      <Animated.View
        style={
          {
            width: "100%",
            justifyContent: "center",
            opacity: currentIndex === index ? 1 : 0.7,
            transform: [{ scale: currentIndex === index ? 1 : 0.9 }],
          } as StyleProp<ViewStyle>
        }
      >
        <Image
          source={item.image}
          style={{
            width: "90%",
            height: 280,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#60A5FA", // secondary color
            resizeMode: "contain",
          }}
        />
      </Animated.View>
      <Text
        className={`text-darkText text-2xl font-rubik-bold text-center mt-4 ${
          currentIndex === index ? "opacity-100" : "opacity-0"
        }`}
      >
        {item.title}
      </Text>
      <Text
        className={`text-darkText text-lg font-rubik text-center mt-2 ${
          currentIndex === index ? "opacity-100" : "opacity-0"
        }`}
      >
        {item.description}
      </Text>
    </View>
  );

  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="bg-darkBackground flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 justify-center px-4 py-5">
            {currentIndex < onboardingData.length - 1 && (
              <TouchableOpacity
                onPress={handleSkip}
                className="absolute top-2.5 right-4 z-10"
              >
                <Text className="text-secondary font-rubik-medium">Skip</Text>
              </TouchableOpacity>
            )}
            <Carousel
              ref={carouselRef as any}
              data={onboardingData}
              renderItem={renderItem}
              width={screenWidth}
              height={400}
              loop={false}
              onSnapToItem={(index: number) => setCurrentIndex(index)}
              className="w-full"
              windowSize={3}
              initialNumToRender={1}
              maxToRenderPerBatch={1}
              updateCellsBatchingPeriod={50}
              autoPlay={false}
              scrollAnimationDuration={200}
              panGestureHandlerProps={{
                activeOffsetX: [-20, 20],
              }}
            />
            <View className="flex-row justify-center gap-2 ">
              {onboardingData.map((_, index) => (
                <View
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-secondary" : "bg-lightGray"
                  }`}
                />
              ))}
            </View>

            <View className="w-full mt-3 gap-2">
              <CustomButton
                title="Continue with Google "
                handlePress={() => {
                  router.push("/home");
                }}
                containStyles="w-full bg-primary border
                   border-mediumGray rounded-lg py-3"
              />
              <View className="flex-row px-2 justify-between align-center">
                <CustomButton
                  title="Sign In"
                  handlePress={() => router.push("/sign-in")}
                  containStyles="w-50 bg-primary border
                   border-mediumGray justify-center rounded-lg  mt-2"
                />
                <CustomButton
                  title="Sign Up"
                  handlePress={() => router.push("/sign-up")}
                  containStyles="w-50 bg-primary border 
                  border-mediumGray rounded-lg  mt-2"
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#1F2937" barStyle="light-content" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
