import React from "react";
import { TouchContainer, Banner } from "./style";

export default function BannerPromo({ data }) {
  return Object.keys(data).map((banner, key) => (
    <TouchContainer key={key} >
      <Banner source={{ uri: data[banner].url }} />
    </TouchContainer>
  ));
}
