import React from "react";
import {
  Container,
  Input,
  InputButton,
  InputButtonText,
  InputContainer,
  InputLabel,
  Titulo
} from './style';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <Container>
      <Titulo>Login</Titulo>
      <InputContainer>
        <Input placeholder={"E-mail"} />
      </InputContainer>
      <InputContainer>
        <Input placeholder={"Senha"} />
      </InputContainer>
      <InputButton onPress={() => navigation.navigate('RouteHome') }>
        <InputButtonText>Acessar</InputButtonText>
      </InputButton>
    </Container>
  );
}
