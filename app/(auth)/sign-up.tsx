import { View, ScrollView, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/src/components/FormField";
import CustomButton from "@/src/components/CustomButton";
import { Link, router } from "expo-router";
import icons from "@/src/constants/icons";

const SignUp: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [form, setForm] = useState<{
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof form, string>>
  >({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof typeof form, string>> = {};
    if (!form.username) {
      newErrors.username = "Username is required";
    } else if (form.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    } else if (!/^[a-zA-Z0-9_]+$/.test(form.username)) {
      newErrors.username =
        "Username can only contain letters, numbers, and underscores";
    }
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
    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Sign-up successful:", form);
      router.push("/home");
    } catch (error) {
      setErrors({ email: "Sign-up failed. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-lightGray h-full">
      <ScrollView>
        <View className="w-full flex-1 justify-center px-4 my-6">
          <Text className="font-rExtrabold text-ash text-2xl mt-8 px-5">
            Join BMGInventory 📦
          </Text>
          <Text className="font-rMedium text-mediumGray mt-1 px-5">
            Create your BMGInventory account
          </Text>

          <FormField
            title="Username"
            value={form.username}
            placeholder="Enter your Username"
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
            error={errors.username}
          />
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
          <FormField
            title="Confirm Password"
            value={form.confirmPassword}
            placeholder="Confirm your Password"
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
            otherStyles="mt-7"
            secureText
            error={errors.confirmPassword}
          />

          <CustomButton
            title="Sign up"
            handlePress={handleSubmit}
            containerStyles="w-full py-3 mt-7 bg-primary"
            textStyles="text-white font-rSemibold"
            isLoading={isSubmitting}
            accessibilityLabel="Create your account"
          />

          <View className="flex flex-row justify-center pt-5 gap-2">
            <Text className="text-mediumGray font-rMedium text-center">
              or sign up with
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
              Already have a BMGInventory account?
            </Text>
            <Link className="font-rBold text-secondary text-lg" href="/sign-in">
              Log in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
