import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

import { icons, images } from "@/src/constants";

const TabIcon = ({ icon, iconColor, name, focused }: any) => {
  return (
    <View className="flex pt-2  items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={iconColor}
        className="w-6 h-6"
      />
      <Text
        className={`${
          focused ? "font-rubik text-xs" : "font-rubik text-xs"
        } text-xs`}
        style={{ color: iconColor }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#46d246",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#0d0d0d",
            borderTopWidth: 0.5,
            borderTopColor: "#212121",
            height: 54,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                iconColor={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="category"
          options={{
            title: "Category",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.Invoice}
                iconColor={color}
                name="items"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="addItem"
          options={{
            title: "AddItem",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                iconColor={color}
                name="Add"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                iconColor={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      <StatusBar backgroundColor="#0d0d0d" style="light" />
    </>
  );
};

export default TabLayout;
