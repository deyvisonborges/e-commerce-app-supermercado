import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from '../navigation/navigation-header';
import CardProduto from "../views/card-produto";

export default function ResultadoBusca({ route }) {
  const navigation = useNavigation();
  navigation.setOptions({
    title: `Setor de ${route.params.setor}`,
  });
  return (
    <>
      <Header cor='verde_abacate'></Header>
      <CardProduto />
    </>
  );
}
