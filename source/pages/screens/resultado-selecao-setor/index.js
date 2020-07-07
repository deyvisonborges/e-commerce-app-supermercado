import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from './header';
import ListaProdutosSetor from '../../../mocks/lista-produtos-setor';

export default function ResultadoBusca({ route }) {
  const navigation = useNavigation();
  navigation.setOptions({
    title: `Setor de ${route.params.setor}`,
  });
  return (
    <>
      <Header />
      <ListaProdutosSetor />
    </>
  );
}
