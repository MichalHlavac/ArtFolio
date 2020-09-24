import React from "react";
import { About } from "../components/styledAbout";

export default () => (
  <About>
    <img className="portrait" src="/profileImg.jpg" alt="Marek Kulhavý" />
    <span className="about">
      <h1>Martina Fischmeister</h1>
      <p>
        I’m an illustrator, making mostly editorial and book illustrations and
        comics. My work is most recognizable for its vivid colors, clean shapes
        and textures. I like to work with the human form, natural elements and
        transcendental motives but I also find inspiration in mythology and old
        stories that still have relevant meaning to this day. Besides creating
        art I’m passionate about ecology, sustainability and mindful living, all
        of which are inspiring me in my work and personal life.
      </p>
    </span>
    <span className="awards">
      <h1>Awards</h1>
      <p>
        Top Talent of Adobe Design Achievement Awards 2019 in the Illustration
        category 2nd place Best illustrator on LUSTR festival 2020
      </p>
      <p>2nd place Best illustrator on LUSTR festival 2020</p>
    </span>
    <span className="clients">
      <h1>Clients</h1>
      <p>
        Newspaper Právo, Magazine Salon, Hong Kong Alliance, Good Looking
        Studio, publisher Novela Bohemica, Magazine Redway, Creative Hub, Studio
        DRAWetc., Skautský institut Prague, Silky Gang, Good Looking Studio,
        brewery Zichovec,
      </p>
    </span>
  </About>
);
