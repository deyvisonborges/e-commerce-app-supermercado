import React from "react";
import { Text, View, ScrollView } from "react-native";
import styled from "styled-components/native";
import { cores } from "../utils/cores";
import NumericInput from "react-native-numeric-input";

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
  border-radius: 12px;
  flex-direction: row;
  padding: 0;
  margin: 10px 0;
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
  justify-content: flex-start;
  padding: 10px;
  width: 100%;
`;

export const ProdutoDetalhes = styled.View`
  align-items: flex-start;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const ProdutoTitulo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  height: auto;
`;

export const ProdutoTag = styled.Text`
  background-color: ${cores.amarelo};
  border-radius: 8px;
  color: ${cores.branco};
  font-size: 12px;
  margin: 2px 0;
  padding: 5px;
  text-align: center;
  width: 90px;
`;

export const ProdutoEventosDescricao = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: 5px 0;
`;

export const BotaoAdicionarCarrinhoContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${cores.verde_abacate};
  border-radius: 8px;
  height: 40px;
  justify-content: center;
  width: 100%;
`;

export const BotaoAdicionarCarrinhoTexto = styled.Text`
  color: ${cores.branco_neve};
  font-size: 14px;
  font-weight: bold;
  width: auto;
`;

export const BotaoQuantidadeContainer = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 0;
`;

export const ContainerButton = styled.View`
  flex-direction: column;
  margin: 0.5%;
  width: 33.3%;
`;

export const BotaoDecremento = styled.TouchableOpacity`
  align-items: center;
  background-color: ${cores.cinza};
  border-radius: 100px;
  height: 100%;
  justify-content: center;
  padding: 24px;
  width: 100%;
`;

export const BotaoIncremento = styled.TouchableOpacity`
  align-items: center;
  background-color: ${cores.cinza};
  height: 100%;
  justify-content: center;
  padding: 24px;
  width: 100%;
`;

export const QuantidadeContainer = styled.Text`
  align-items: center;
  text-align: center;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const ContainerImagemValor = styled.View`
  flex-direction: column;
`;

export default function CardProduto() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <Card
          style={{
            shadowColor: cores.preto_azulado,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
        >
          <ProdutoImagem
            source={{
              uri:
                "https://imagensemoldes.com.br/wp-content/uploads/2020/06/Foto-de-Carne-PNG-1200x900.png",
            }}
          />
          <ProdutoDescricao>
            <ProdutoDetalhes>
              <ContainerImagemValor>
                <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
                <Text>R$ 20.99</Text>
              </ContainerImagemValor>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>

            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <ContainerButton>
                  <BotaoDecremento>
                    <Text>-</Text>
                  </BotaoDecremento>
                </ContainerButton>

                <ContainerButton>
                  <QuantidadeContainer editable maxLength={40} value={0}>
                    0
                  </QuantidadeContainer>
                </ContainerButton>

                <ContainerButton>
                  <BotaoIncremento>
                    <Text>+</Text>
                  </BotaoIncremento>
                </ContainerButton>
              </BotaoQuantidadeContainer>

              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>
      </Container>
    </ScrollView>
  );
}
