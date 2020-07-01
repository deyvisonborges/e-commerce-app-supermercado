import styled from 'styled-components/native';

export const ExtensionImage = styled.Image`
  background-color: ${props => props.backgroundColor || null};
  border-radius: ${props => props.borderRadius || null};
  height: ${props => props.height || null};
  position: relative;
  width: ${props => props.width || null};
`