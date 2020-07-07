import React, { useState } from "react";
import Banners from './lista-banners/banner-promocao';
import {
  Container,
  Titulo
} from './style';

export default function BannerPromocoes() {

  const [banner, inserirBanner] = useState([
    { id: '1', url: 'https://www.supermercadooliveira4.com.br/wp-content/uploads/2018/09/BANNER-1200-X-300-Site-oliveira-41.jpg' },
    { id: '2', url: 'https://www.supermercadooliveira4.com.br/wp-content/uploads/2018/09/BANNER-1200-X-300-Site-oliveira-43.jpg' },
    { id: '3', url: 'https://lh6.googleusercontent.com/proxy/tJr0xBpvkg-n44WgEvAzdzmpFw9qkFuay8r04eHbjUGikUsBLpUZSQL4AR5Qpg5C5w3WnI51_O-_8Zhh8z_bFYZc89j6Hi5_uYRifAH3U8mkgw' },
    { id: '4', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCPSm90PiT2Jd_qCvzvsm2BeMsEbnj1w0HcVHJuWWgzVKv_U&s' },
  ]);

  return (
    <>
      <Titulo>
        Ofertas
      </Titulo>
      <Container horizontal={true} showsHorizontalScrollIndicator={false}>
        <Banners data={banner} />
      </Container>
    </>
  );
}
