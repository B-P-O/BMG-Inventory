import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  TextInputProps,
} from "react-native";
import React, { useState } from "react";
import icons from "@/src/constants/icons";

interface FormFieldProps extends TextInputProps {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  secureText?: boolean;
  error?: string;
  keyboardType?: TextInputProps["keyboardType"];
}

const FormField: React.FC<FormFieldProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles = "",
  secureText = false,
  error,
  keyboardType = "default",
  ...props
}) => {
  const [showSecureText, setShowSecureText] = useState<boolean>(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      {/* Label */}
      <Text className="font-rMedium text-ash text-lg p-2">{title}</Text>

      {/* Input Container */}
      <View
        className={`w-full h-16 px-4 rounded-2xl flex-row items-center bg-white border-2 ${
          error ? "border-error" : "border-mediumGray focus:border-primary"
        }`}
      >
        <TextInput
          className="flex-1 font-rSemibold text-ash text-base"
          placeholder={placeholder}
          onChangeText={handleChangeText}
          value={value}
          placeholderTextColor="#6B7280" // mediumGray
          secureTextEntry={secureText && !showSecureText}
          keyboardType={keyboardType}
          accessibilityLabel={title}
          {...props}
        />

        {/* Toggle for secure fields */}
        {secureText && (
          <TouchableOpacity
            onPress={() => setShowSecureText(!showSecureText)}
            className="flex-shrink-0"
            accessibilityLabel={`Toggle ${title} visibility`}
          >
            <Image
              source={!showSecureText ? icons.eyeHide : icons.eye}
              resizeMode="contain"
              className="w-5 h-6 tint-primary" // Tint icon with primary color
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {error && <Text className="text-error text-sm font-rubik">{error}</Text>}
    </View>
  );
};

export default FormField;
