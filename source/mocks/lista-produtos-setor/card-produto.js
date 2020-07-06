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

// container dos botoes de quantidade e adicionar ao carrinho
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

// adicionar ao carrinho
export const BotaoAdicionarCarrinhoTexto = styled.Text`
  color: ${cores.branco_neve};
  font-size: 14px;
  font-weight: bold;
  width: auto;
`;

// seletor de quantidade
export const BotaoQuantidadeContainer = styled.View`
  width: 100%;
  height: 50px;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 10px 0;
`;

export const BotaoDecremento = styled.TouchableOpacity`
  background-color: ${cores.cinza};
  padding: 20px;
`;
export const BotaoIncremento = styled.TouchableOpacity`
  background-color: ${cores.cinza};
  padding: 20px;
`;
export const QuantidadeContainer = styled.Text``;

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
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              {/* <NumericInput
              borderColor={cores.cinza}
              value={0}
              totalWidth={50}
              totalHeight={50}
              iconSize={12}
              step={1}
              valueType="real"
              textColor={cores.verde_abacate}
              iconStyle={{ color: cores.branco }}
              rightButtonBackgroundColor={cores.amarelo}
              leftButtonBackgroundColor={cores.amarelo}
            /> */}
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>

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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>

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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>

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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>

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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>
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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              {/* <NumericInput
              borderColor={cores.cinza}
              value={0}
              totalWidth={50}
              totalHeight={50}
              iconSize={12}
              step={1}
              valueType="real"
              textColor={cores.verde_abacate}
              iconStyle={{ color: cores.branco }}
              rightButtonBackgroundColor={cores.amarelo}
              leftButtonBackgroundColor={cores.amarelo}
            /> */}
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>

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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>

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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>

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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
              </BotaoQuantidadeContainer>
              <BotaoAdicionarCarrinhoContainer>
                <BotaoAdicionarCarrinhoTexto>
                  Adidionar ao Carrinho
                </BotaoAdicionarCarrinhoTexto>
              </BotaoAdicionarCarrinhoContainer>
            </ProdutoEventosDescricao>
          </ProdutoDescricao>
        </Card>

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
              <ProdutoTitulo>Alcatra Bovina 5Kg</ProdutoTitulo>
              <ProdutoTag>Mais vendido</ProdutoTag>
            </ProdutoDetalhes>
            <ProdutoEventosDescricao>
              <BotaoQuantidadeContainer>
                <BotaoDecremento>
                  <Text>-</Text>
                </BotaoDecremento>
                <QuantidadeContainer editable maxLength={40} value={0}>
                  0
                </QuantidadeContainer>
                <BotaoIncremento>
                  <Text>+</Text>
                </BotaoIncremento>
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
