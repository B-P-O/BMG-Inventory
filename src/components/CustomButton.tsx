import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  image?: any;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  accessibilityLabel?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  image,
  handlePress,
  containerStyles = "",
  textStyles = "",
  isLoading = false,
  accessibilityLabel,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`flex flex-row rounded-lg min-h-[50px] px-5 
        justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      activeOpacity={0.7}
      accessibilityLabel={accessibilityLabel} // Added here
      accessibilityRole="button" // Enhances accessibility
    >
      {image && (
        <Image
          source={image}
          resizeMode="contain"
          className="w-6 h-6 mr-2" // Adjusted padding to margin
        />
      )}
      <Text
        className={`text-ash font-rSemibold px-5 text-lg text-center ${textStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
