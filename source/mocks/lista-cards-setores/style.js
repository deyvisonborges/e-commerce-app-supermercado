import styled from "styled-components/native";
import { cores } from "../../utils/cores";

export const Titulo = styled.Text`
  align-self: flex-start;
  color: ${cores.preto_azulado};
  font-weight: bold;
  font-size: 18px;
  margin: 10px 20px;
`;

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
