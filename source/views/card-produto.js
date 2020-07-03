import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { cores } from "../utils/cores";

export const Container = styled.View`
  align-items: stretch;
  background-color: ${cores.branco};
  flex: 1;
  flex-direction: column;
  padding: 20px;
`;

export const Card = styled.View`
  align-items: center;
  background-color: ${cores.branco};
  border: 1px solid ${cores.verde_abacate};
  border-radius: 12px;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

export const ProdutoImagem = styled.Image`
  align-self: flex-start;
  width: 150px;
  height: 150px;
  margin: 10px;
  resize-mode: contain;
`;

export const ProdutoDescricao = styled.View`
  flex-direction: column;
  flex: 1;
  height: 100%;
  /* background-color: ${cores.lilas}; */
  justify-content: flex-start;
  padding: 10px;
  width: 100%;

`;

export const ProdutoTitulo = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ProdutoTag = styled.Text`
  background-color: ${cores.amarelo};
  border-radius: 8px;
  color: ${cores.branco};
  font-size: 12px;
  padding: 5px;
  width: 100px;
`;

export default function CardProduto() {
  return (
    <Container>
      <Card>
        <ProdutoImagem
          source={{
            uri:
              "https://imagensemoldes.com.br/wp-content/uploads/2020/06/Foto-de-Carne-PNG-1200x900.png",
          }}
        />
        <ProdutoDescricao>
          <ProdutoTitulo>Alcatra Bovina - 5Kg</ProdutoTitulo>
          <ProdutoTag>Mais vendido</ProdutoTag>
        </ProdutoDescricao>
      </Card>
    </Container>
  );
}
