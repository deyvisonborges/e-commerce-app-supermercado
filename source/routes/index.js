import "react-native-gesture-handler";

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";

import { cores } from "../utils/cores";

import Home from "../pages/home";
import ResultadoSelecaoSetor from '../pages/screens/resultado-selecao-setor';

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
    </Tab.Navigator>
  );
};

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RouteHome"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RouteTabs"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResultadoSelecaoSetor"
        component={ResultadoSelecaoSetor}
        options={{
          headerShown: false,
          headerTintColor: cores.amarelo,
          headerStyle: {
            backgroundColor: cores.verde_abacate,
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
