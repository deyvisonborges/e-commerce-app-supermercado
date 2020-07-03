import React from "react";
import styled from "styled-components/native";
import { cores } from "../../utils/cores";

const Background = styled.View`
  background-color: ${cores.verde_abacate};
  padding: 20px 30px;
`;

const Container = styled.View`
  align-items: center;
  flex-direction: column;
  height: auto;
  position: relative;
`;

export default function index({ children }) {
  return (
    <Background>
      <Container>{children}</Container>
    </Background>
  );
}
