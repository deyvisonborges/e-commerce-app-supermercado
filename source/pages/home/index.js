import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { cores } from "../../utils/cores";


import HomeHeader from "../../components/header";
import HomeBannerPromocoes from '../../view/banners-promocoes';

import {
  ButtonBusca,
  ContainerBusca,
  HeaderInput,
  HeaderUserLogo,
  HeaderUserNameTitulo,
  HomeContainer,
  HomeContent,
  UserContainer,
  UserImageInfo,
} from "./style";

export default function home() {
  const navigation = useNavigation();
  return (
    <>
      <HomeHeader>
        <UserContainer>
          <UserImageInfo>
            <TouchableOpacity>
              <HeaderUserLogo
                source={{
                  uri:
                    "https://media-exp1.licdn.com/dms/image/C4D03AQENOed9fSxdHA/profile-displayphoto-shrink_100_100/0?e=1599091200&v=beta&t=T3OTZ7GdXYYY9uwbvF5lQOddIkFqG1kOg4Sf9m4WdB4",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <HeaderUserNameTitulo>Olá, Deyvison</HeaderUserNameTitulo>
            </TouchableOpacity>
          </UserImageInfo>
          <TouchableOpacity>
            <Icon name={"menu"} color={cores.branco_neve} size={32} />
          </TouchableOpacity>
        </UserContainer>
        <ContainerBusca>
          <HeaderInput placeholder="Buscar um produto" />
          <ButtonBusca onPress={() => navigation.navigate("ResultadoBusca")}>
            <Icon name={"search"} color={cores.branco_neve} />
          </ButtonBusca>
        </ContainerBusca>
      </HomeHeader>
      <HomeContainer>
        <HomeContent>
          <HomeBannerPromocoes />
        </HomeContent>
      </HomeContainer>
    </>
  );
}
