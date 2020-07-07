import React from "react";
import { Titulo, Container } from "./style";
import { useNavigatoin, useNavigation } from "@react-navigation/native";
import { requires } from "../../utils/icones";
import CardSetorHome from "../../elements/card-setor-home";

const ListaCardsStores = () => {
  const navigation = useNavigation();

  const data = {
    carne: {
      caminho_icone: requires.carnes,
      descricao: "Carnes",
      evento: () => navigation.navigate(""),
    },
    peixaria: {
      caminho_icone: requires.peixaria,
      descricao: "Peixaria",
      evento: () => console.log("peixaria"),
    },
  };
  return (
    <>
      <Titulo>Confira nossos setores</Titulo>
      <Container>
        {Object.keys(data).map((item, key) => (
          <CardSetorHome data={data[item]} />
        ))}
      </Container>
    </>
  );
};

export default ListaCardsStores;
