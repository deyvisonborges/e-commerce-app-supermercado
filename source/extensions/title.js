import styled from 'styled-components/native';

export const Titulo = styled.Text`
  color: ${props => props.cor};
  font-size: ${props => props.tamanho};
  text-align: ${props => props.alinhamentoTexto};
  margin: ${props => props.margemTotal};
`;