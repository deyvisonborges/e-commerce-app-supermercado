import React from "react";
import styled from "styled-components";

import { cores } from "../../utils/cores";

const Container = styled.View`
  align-items: center;
  background-color: ${cores.preto_rich};
  flex: 1;
`;

const Content = styled.View`
  flex-direction: row;
  position: relative;
`;

export default function home({ children }) {
  return (
    <Container>
      <Content>
        { children }
      </Content>
    </Container>
  );
}
