import React from "react";
import { TouchContainer, Banner } from "./style";

const BannerOferta = ({ url }) => {
  return (
    <TouchContainer>
      <Banner source={{ uri: url }} />
    </TouchContainer>
  );
};

export default BannerOferta;
