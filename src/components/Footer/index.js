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
        Desvious Order
        {' '}
        <a href="https://desviousorder.bandcamp.com/">
          Support our productions on our bandcamp
          <br>
          </br>
          Victor Nascimento
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
