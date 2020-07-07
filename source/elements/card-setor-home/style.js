import styled from "styled-components/native";
import { cores } from "../../utils/cores";

export const Container = styled.View`
  align-items: center;
  background-color: ${cores.branco};
  border-radius: 12;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  margin: 10px;
  width: 100px;  
`;

export const Image = styled.Image`
  height: 50px;
  width: 50px;
`;

export const ImageDescription = styled.Text`
  color: ${cores.preto_azulado};
`;

export const ImageTouch = styled.TouchableOpacity``;
