import React from "react";
import { Text, ScrollView } from "react-native";
import { cores } from "../../utils/cores";
import {
  BotaoAdicionarCarrinhoContainer,
  BotaoAdicionarCarrinhoTexto,
  BotaoDecremento,
  BotaoIncremento,
  BotaoQuantidadeContainer,
  Card,
  Container,
  ContainerImagemValor,
  ProdutoDescricao,
  ProdutoDetalhes,
  ProdutoEventosDescricao,
  ProdutoImagem,
  ProdutoTag,
  ProdutoTitulo,
  QuantidadeContainer,
} from './style';

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
