import styled from "styled-components/native";
import { cores } from "../../utils/cores";

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${cores.branco_neve};
  height: auto;
  width: 100%;
`;

export const HomeContent = styled.View`
  align-items: center;
  flex-direction: column;
  /* background-color: ${cores.lilas}; */
  width: 100%;
`;

export const UserContainer = styled.View`
  align-items: center;
  border: 1px solid ${cores.laranja};
  border-radius: 12px;
  flex-direction: row;
  height: auto;
  justify-content: space-between;
  padding: 10px 20px;
  position: relative;
  width: 100%;
`;

export const HeaderUserLogo = styled.Image`
  border-radius: 100px;
  background-color: ${cores.preto_azulado};
  margin: 0 10px 0 0;
  position: relative;
  width: 32px;
  height: 32px;
`;

export const HeaderUserNameTitulo = styled.Text`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  position: relative;
  width: auto;
`;

export const ContainerBusca = styled.View`
  padding: 10px 0 0 0;
  flex-direction: row;
  flex: 1;
`;

export const ButtonBusca = styled.TouchableOpacity`
  background-color: ${cores.laranja};
  border: 1px solid ${cores.shadow};
  border-radius: 12px;
  margin: 17px;
  padding: 10px;
  position: absolute;
  right: 0;
  width: auto;
`;

export const UserImageInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderInput = styled.TextInput.attrs({
  placeholderTextColor: cores.preto_azulado,
})`
  background-color: ${cores.branco_neve};
  border: 1px solid ${cores.shadow};
  border-radius: 12px;
  color: ${cores.vermelho_claro};
  font-size: 16px;
  height: auto;
  padding: 10px 20px;
  text-decoration: none;
  width: 100%;
`;
