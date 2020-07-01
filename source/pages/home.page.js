import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";

import HomeContainer from "../containers/home";
import HomeHeader from "../containers/header";
import { Titulo } from "../extensions/title";
import { Image } from '../extensions/image';
import { cores } from "../utils/cores";

export default function index() {
  return (
    <HomeContainer>
        <Titulo
          cor={"#fff"}
          tamanho={"20px"}
          alinhamentoTexto={"left"}
          margemTotal={"5px"}
        >
          Olá, Deyvison.
        </Titulo>
        <TouchableOpacity>
          <Icon name={"menu"} color={cores.azul_independence} size={32} />
        </TouchableOpacity>
      </HomeHeader>
    </HomeContainer>
  );
}
