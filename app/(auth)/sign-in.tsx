import { View, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/src/components/FormField";
import CustomButton from "@/src/components/CustomButton";
import { Link, router } from "expo-router";
import icons from "@/src/constants/icons";

const SignIn: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof form, string>>
  >({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof typeof form, string>> = {};
    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";
    if (!form.password) {
      newErrors.password = "Password is required";
    } else {
      if (form.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.password)) {
        newErrors.password =
          "Password must include uppercase, lowercase, and a number";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Sign-in successful:", form);
      router.push("/home");
    } catch (error) {
      setErrors({ email: "Sign-in failed. Check your credentials." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-lightGray h-full">
      <ScrollView>
        <View className="w-full flex-1 justify-center px-4 my-6">
          <Text className="font-rExtrabold text-ash text-2xl mt-8 px-5">
            Welcome to BMGInventory 📦
          </Text>
          <Text className="font-rMedium text-mediumGray mt-1 px-5">
            Log in to BMGInventory
          </Text>

          <FormField
            title="Email"
            value={form.email}
            placeholder="Enter your Email"
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
            error={errors.email}
          />
          <FormField
            title="Password"
            value={form.password}
            placeholder="Enter your Password"
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            secureText
            error={errors.password}
          />

          <CustomButton
            title="Sign in"
            handlePress={handleSubmit}
            containerStyles="w-full py-3 mt-7 bg-primary"
            textStyles="text-white font-rSemibold"
            isLoading={isSubmitting}
            accessibilityLabel="Sign in to your account"
          />

          <View className="flex flex-row justify-center pt-5 gap-2">
            <Text className="text-mediumGray font-rMedium text-center">
              or login with
            </Text>
          </View>
          <View className="w-full mt-5 gap-4">
            <CustomButton
              title="Continue with Google"
              image={icons.Google}
              handlePress={() => router.push("/home")}
              containerStyles="w-full py-3 bg-white border border-mediumGray rounded-lg"
              textStyles="text-ash font-rSemibold"
              accessibilityLabel="Continue with Google"
            />
          </View>
          <View className="flex flex-row justify-center pt-5 gap-2">
            <Text className="font-rLight text-mediumGray text-lg">
              Don’t have a BMGInventory account?
            </Text>
            <Link className="font-rBold text-secondary text-lg" href="/sign-up">
              Register
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
