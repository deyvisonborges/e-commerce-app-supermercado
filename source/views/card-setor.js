import React from "react";
import { View, Text, Image } from "react-native";
import { cores } from "../utils/cores";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigatoin, useNavigation } from "@react-navigation/native";

export default function CardSetor() {
  const navigation = useNavigation();
  return (
    <>
      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 20,
          marginTop: 10,
          marginBottom: 10,
          color: cores.preto_azulado,
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        Confira nossos setores
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: 100,
            height: 100,
            borderRadius: 12,
            backgroundColor: cores.cinza,
            margin: 10,
            shadowColor: cores.preto_azulado,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ResultadoSelecaoSetor", { setor: 'Enlatados'});
            }}
          >
            <Image
              source={require("../assets/icone-enlatados.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text style={{ color: cores.preto_azulado }}>Enlatados</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: 100,
            height: 100,
            borderRadius: 12,
            backgroundColor: cores.cinza,
            margin: 10,
            shadowColor: cores.preto_azulado,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/icone-frios.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text style={{ color: cores.preto_azulado }}>Frios</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: 100,
            height: 100,
            borderRadius: 12,
            backgroundColor: cores.cinza,
            margin: 10,
            shadowColor: cores.preto_azulado,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/icone-hortfruit.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text style={{ color: cores.preto_azulado }}>Hortfruit</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: 100,
            height: 100,
            borderRadius: 12,
            backgroundColor: cores.cinza,
            margin: 10,
            shadowColor: cores.preto_azulado,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/icone-massas.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text style={{ color: cores.preto_azulado }}>Massas</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: 100,
            height: 100,
            borderRadius: 12,
            backgroundColor: cores.cinza,
            margin: 10,
            shadowColor: cores.preto_azulado,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/icone-carne.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text style={{ color: cores.preto_azulado }}>Carnes</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: 100,
            height: 100,
            borderRadius: 12,
            backgroundColor: cores.cinza,
            margin: 10,
            shadowColor: cores.preto_azulado,
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/icone-lanche.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
            <Text style={{ color: cores.preto_azulado }}>Salgados</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
