import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
<StatusBar backgroundColor="#0d0d0d" style="dark" />;
