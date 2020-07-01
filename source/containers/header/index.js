import React from "react";
import styled from "styled-components";
import { cores } from "../../utils/cores";

const Container = styled.View`
  background-color: ${cores.preto_rich};
  padding: 10px;
  height: auto;
  width: 100%;
`;

const Content = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export default function Header({ children }) {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  );
}
