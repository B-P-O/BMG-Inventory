import React, { useRef, useState } from "react";
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
import images from "@/src/constants/images";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { router } from "expo-router";
import CustomButton from "@/src/components/CustomButton";
import { icons } from "@/src/constants";

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
    description: "Manage your inventory with ease",
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
            borderColor: "#60A5FA", // secondary
            resizeMode: "contain",
          }}
        />
      </Animated.View>
      <Text
        className={`text-ash text-2xl font-rExtrabold text-center mt-4 ${
          currentIndex === index ? "opacity-100" : "opacity-70"
        }`}
      >
        {item.title}
      </Text>
      <Text
        className={`text-mediumGray text-lg font-rMedium text-center mt-2 ${
          currentIndex === index ? "opacity-100" : "opacity-70"
        }`}
      >
        {item.description}
      </Text>
    </View>
  );

  return (
    <GestureHandlerRootView className="flex-1">
      <SafeAreaView className="bg-lightGray flex-1">
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className="flex-1 justify-center px-4 py-5">
            {currentIndex < onboardingData.length - 1 && (
              <TouchableOpacity
                onPress={handleSkip}
                className="absolute top-10 right-4 z-10"
              >
                <Text className="text-secondary font-rSemibold text-lg">
                  Skip
                </Text>
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
            <View className="flex-row justify-center gap-2 mt-5">
              {onboardingData.map((_, index) => (
                <View
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentIndex ? "bg-primary" : "bg-mediumGray"
                  }`}
                />
              ))}
            </View>

            <View className="w-full mt-10 gap-4">
              <CustomButton
                title="Continue with Google"
                image={icons.Google}
                handlePress={() => router.push("/home")}
                containerStyles="w-full py-3 bg-white border border-mediumGray rounded-lg"
                textStyles="text-ash font-rSemibold"
                accessibilityLabel="Continue with Google"
              />
              <View className="flex-row justify-between px-5">
                <CustomButton
                  title="Sign In"
                  handlePress={() => router.push("/sign-in")}
                  containerStyles="w-[48%] py-3 bg-primary rounded-lg"
                  textStyles="text-white font-rSemibold"
                  accessibilityLabel="Sign in to your account"
                />
                <CustomButton
                  title="Sign Up"
                  handlePress={() => router.push("/sign-up")}
                  containerStyles="w-[48%] py-3 bg-primary rounded-lg"
                  textStyles="text-white font-rSemibold"
                  accessibilityLabel="Create a new account"
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#F3F4F6" barStyle="dark-content" />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
