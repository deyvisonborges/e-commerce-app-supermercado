import "react-native-gesture-handler";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";

import Home from '../pages/home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Icons = {
  home: { name: "home", size: 23, color: "blue" },
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = Icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#121212",
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#ff0000",
      }}
    >
      <Tab.Screen name="home" component={Home} />
    </Tab.Navigator>
  );
};

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RouteHome"
        component={Tabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
