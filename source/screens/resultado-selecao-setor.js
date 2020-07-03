import React from "react";
import { View, Text } from "react-native";
import CardProduto from "../views/card-produto";
import { useNavigation } from "@react-navigation/native";

export default function ResultadoBusca({ route }) {
  const navigation = useNavigation();
  navigation.setOptions({
    title: `Setor de ${route.params.setor}`,
  });
  return <CardProduto />;
}
