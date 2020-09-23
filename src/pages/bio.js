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
  </About>
);
