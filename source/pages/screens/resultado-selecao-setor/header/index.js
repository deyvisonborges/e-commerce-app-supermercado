import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";
import { Background, Content, Icon, IconGroup } from "./style";

export default function Header({ children, cor }, props) {
  const navigation = useNavigation();

  return (
    <Background>
      <Content>
        <IconGroup>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={{ alignSelf: 'flex-start'}} source={require("../../../../assets/gestures/icone_voltar.png")} />
          </TouchableOpacity>
        </IconGroup>
        <IconGroup>
          <TouchableOpacity onPress={() => null }>
            <Icon style={{ alignSelf: 'flex-end'}} source={require("../../../../assets/icone_carrinho.png")} />
          </TouchableOpacity>
        </IconGroup>
      </Content>
    </Background>
  );
}
