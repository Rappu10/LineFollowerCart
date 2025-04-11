import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Importamos las pantallas
import Home from "../screens/Home";
import ProductList from "../screens/ProductList";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Componentes Usados") {
            iconName = "hardware-chip-outline";
          } else if (route.name === "Mapeo") {
            iconName = "map";
          } else if (route.name === "Integrantes") {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: 'black', // Fondo negro del menú inferior
          borderTopWidth: 0,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Componentes Usados" component={ProductList} />
      <Tab.Screen name="Mapeo" component={Cart} />
      <Tab.Screen name="Integrantes" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
