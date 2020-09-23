import React from "react";
import { About } from "../components/styledAbout";
import styled from "styled-components";

const A = styled.a`
  font-size: 20px;
  text-align: center;
  display: block;
`;
export default () => (
  <About>
    <span className="contacts">
      <h1>Contacts</h1>
      <p>Martina Fischmeister</p>
      <a href="mailto:fischmeister.art%40gmail.com">
        fischmeister.art&#064;gmail.com
      </a>
      <br />
      <a href="tel:+420 607 028 769">+420 607 028 769</a>
    </span>
    <span className="contact">
      <A href="https://www.facebook.com/martinafischmeister/" target="_blank">
        Facebook
      </A>

      <A href="https://www.instagram.com/fischmeisterr/" target="_blank">
        Instagram
      </A>
      <A href="https://www.behance.net/fischmeister" target="_blank">
        Behance
      </A>
    </span>
    <span className="legal">
      <p>
        Ič: 07798288
        <br /> In registry from: 14.1.2019
      </p>
    </span>
  </About>
);
