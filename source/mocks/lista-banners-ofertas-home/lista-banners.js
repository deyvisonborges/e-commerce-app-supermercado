import React from "react";
import BannerOferta from '../../elements/banner-oferta-home';

const ListaBanners = ({
  data
}) => {
  return Object.keys(data).map((banner, key) => (
    <BannerOferta key={key} url={data[banner].url} />
  ));
}

export default ListaBanners;