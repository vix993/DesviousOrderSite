import React from 'react';
import Logo from '../../assets/img/Logo.jpg';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://desviousorder.bandcamp.com/">
        <img src={Logo} style={{width: "120px", height: "auto" }} alt="Logodesvious" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://desviousorder.bandcamp.com/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
