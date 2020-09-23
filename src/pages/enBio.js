import React from "react";
import { About } from "../components/styledAbout";

export default () => (
  <About>
    <img className="portrait" src="/profileImg.jpg" alt="Marek Kulhavý" />
    <span className="about">
      <h1>Martina Fischmeister</h1>
      <p>
        Hi, I'm a freelance illustrator and artist from Prague, Czechia. In my
        illustration I like to work with color and movement, relationship
        between shapes and the complexity of balancing story with picture.
        Outside of illustrative work I devote myself to comics and traditional
        painting.
      </p>
      <p>
        If you want to hire me, have questions or just say want to say hi, feel
        free to contact me!
      </p>
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
  </About>
);
