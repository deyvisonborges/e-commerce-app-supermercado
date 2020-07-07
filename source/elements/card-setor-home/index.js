import React from "react";
import { cores } from "../../utils/cores";
import { Container, Image, ImageTouch, ImageDescription } from "./style";

const CardSetorHome = ({ data }) => {
  return (
    <Container
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
      <ImageTouch onPress={data.evento}>
        <Image source={data.caminho_icone} />
        <ImageDescription style={{ color: cores.preto_azulado }}>
          {data.descricao}
        </ImageDescription>
      </ImageTouch>
    </Container>
  );
};

export default CardSetorHome;
