import React from "react";
import styled from "styled-components/native";
import { cores } from "../utils/cores";
import { TouchableOpacity } from "react-native-gesture-handler";

const Banner = styled.Image`
  width: 350px;
  height: 160px;
  border-radius: 12px;
  border: 2px solid ${cores.shadow};
  margin: 0 5px 0 10px;
  
`;

export default function BannerPromo({ data }) {
  return Object.keys(data).map((banner, key) => (
    <TouchableOpacity>
      <Banner
        key={key}
        source={{ uri: data[banner].url }}
      />
    </TouchableOpacity>
  ));
}
