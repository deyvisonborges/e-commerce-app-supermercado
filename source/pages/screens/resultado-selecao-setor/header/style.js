import styled from "styled-components/native";
import { cores } from "../../../../utils/cores";

export const Background = styled.View`
  align-items: center;
  background-color: ${cores.verde_abacate};
  height: 60px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const Content = styled.View`
  align-items: center;
  flex-direction: row;
  height: auto;
  padding: 8px 20px;
  position: relative;
  width: 100%;
`;

export const IconGroup = styled.View`
  flex-direction: column;
  position: relative;
  width: 50%;
`;

export const Icon = styled.Image`
  height: 30px;
  position: relative;
  width: 30px;
`;
