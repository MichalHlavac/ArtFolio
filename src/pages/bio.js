import React from "react";
import { About } from "../components/styledAbout";

export default () => (
  <About>
    <img className="portrait" src="/profileImg.jpg" alt="Marek Kulhavý" />
    <span className="about">
      <h1>Martina Fischmeister</h1>
      <p>
        Jsem ilustrátorka a umělkyně působící v Praze. V mých ilustracích se
        ráda zabývám barvou a pohybem, vztahy mezi tvary a spletitostí doplnění
        příběhu obrazem. Mimo ilustrativní práce se věnuji komiksům a klasické
        malbě.
      </p>
      <p>Chcete-li mně najmout, zeptat se, říct ahoj, neváhejte mi napsat!</p>
    </span>
    <span className="clients">
      <h1>Klienti</h1>
      <p>
        noviny Právo, magazín Salon, magazín Redway, nakladatelství Novela
        Bohemica, Creative Hub, Studio DRAWetc., RAW art wrestling, Skautský
        institut, Good Looking Studio
      </p>
    </span>
    <span className="awards">
      <h1>Ocenění</h1>
      <p>
        Top Talent od Adobe Design Achievement Awards 2019 v kategorii Ilustrace
      </p>
      <p>2. místo nejlepší ilustrátor na LUSTR 2020</p>
    </span>
  </About>
);
