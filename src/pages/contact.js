import React from "react";
import { About } from "../components/styledAbout";

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
    <span className="clients">
      <h1>Clients include</h1>
      <p>
        Newspaper Právo, Magazine Salon, Novela Bohemica, Magazine Redway,
        Creative Hub, Studio DRAWetc., Skautský institut Prague
      </p>
    </span>
    <span className="awards">
      <h1>Awards</h1>
      <p>
        Top Talent of Adobe Design Achievement Awards 2019 in the Illustration
        category.
      </p>
    </span>
    <span className="legal">
      <p>
        Ič: 07798288
        <br /> In registry from: 14.1.2019
      </p>
    </span>
  </About>
);
