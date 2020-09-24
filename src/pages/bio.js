import React from "react";
import { About } from "../components/styledAbout";

export default () => (
  <About>
    <img className="portrait" src="/profileImg.jpg" alt="Marek Kulhavý" />
    <span className="about">
      <h1>Martina Fischmeister</h1>
      <p>
        Jsem ilustrátorka působící v Praze. Nejvíce se věnuji tvorbě knižní,
        editorial ilustrace a komiksů. Mé práce jsou rozpoznatelné díky výrazné
        barevnosti, čistým tvarům a texturám. Ráda pracuji s lidskou formou,
        přírodními a transcendentálními elementy, ale také nacházím inspiraci v
        mytologii a starých pověstech, které nám stále mají co říct. Kromě umění
        se zajímám o ekologii a udržitelnost, což mně inspiruje v profesním i
        osobním životě.
      </p>
    </span>
    <span className="awards">
      <h1>Ocenění</h1>
      <p>
        Top Talent od Adobe Design Achievement Awards 2019 v kategorii Ilustrace
      </p>
      <p>2. místo Nejlepší ilustrátor na festivalu LUSTR 2020</p>
    </span>
    <span className="clients">
      <h1>Klienti</h1>
      <p>
        Noviny Právo, magazín Salon, magazín Redway, nakladatelství Novela
        Bohemica, Good Looking Studio, Creative Hub, Studio DRAWetc., RAW art
        wrestling, Skautský institut, Silky Gang, pivovar Zichovec, Hong Kong
        Alliance
      </p>
    </span>
  </About>
);
