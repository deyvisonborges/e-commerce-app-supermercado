import styled from 'styled-components/native';
import { cores } from '../../utils/cores';

export const Titulo = styled.Text`
  margin: 10px 0 0 20px;
  flex-direction: row;
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.preto_azulado};
  border: solid 1px red;
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px;
  border: solid 1px red;
`;