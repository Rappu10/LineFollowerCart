import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import React from "react";
import StackNavigator from "./src/navigation/StackNavigator";

export default function App() {
  return (
    <>
      <StackNavigator />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
