import styled from 'styled-components/native';
import { cores } from '../../utils/cores';

export const Titulo = styled.Text`
  margin: 10px 0 0 20px;
  flex-direction: row;
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.preto_azulado};
`;

export const Container = styled.ScrollView`
  width: 100%;
  margin: 10px 20px;
`;