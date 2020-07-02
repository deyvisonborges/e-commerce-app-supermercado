import styled from "styled-components/native";
import { cores } from "../../utils/cores";

export const Container = styled.View`
  align-items: center;
  background-color: ${cores.roxo_medio};
  flex: 1;
  justify-content: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255, 255, 255, 0.20)",
})`
  background-color: null;
  border: none;
  border: 2px solid ${cores.verde};
  border-radius: 12px;
  color: ${cores.verde_claro};
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  width: 80%;
`;

export const InputLabel = styled.Text`
  color: ${cores.branco_neve};
  font-size: 16px;
`;

export const InputButton = styled.TouchableOpacity`
  background-color: ${cores.verde};
  border-radius: 12px;
  padding: 15px;
  width: 80%;
`;

export const InputButtonText = styled.Text`
  color: ${cores.branco_neve};
  text-align: center;
`;
export const Titulo = styled.Text`
  color: ${cores.branco_neve};
  font-size: 24px;
`;