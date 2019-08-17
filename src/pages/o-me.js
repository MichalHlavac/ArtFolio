import React from 'react';
import { About } from '../components/styledAbout';

export default () =>(
    <About>
        <img className="portrait" src="/IMG/profileImg.jpg" alt="Martina Fischmeister"/>
        <span className="head">
            <h1>Martina Fischmeister *1995</h1>
            <p>Česká ilustrátorka a malířka, žijící v Praze.</p>
        </span>
    
        <p className="about">
            Vystudovala jsem Soukromou střední uměleckou školu designu s.r.o., obor Užitá malba (akad. mal. Jaroslav Klát) a získala titul na Art&Design Institut v Praze, obor Výtvarná tvorba a umělecký provoz, pod vedením doc. Romana Franty a prof. Jiřího Lindovského.

            Profesionálně se věnuji tvorbě knižní a editorial ilustrace, také se zabývám tvorbou komiksů, návrhů na tetování a olejomaleb.

            Moje ilustrace pravidelně vycházejí v novinách Právo, v magazínu Salon a také v knihách na českém a anglickém trhu. 
        </p>

        <span className="offer">
            <h2>Co Vám můžu nabídnout?</h2>
            <p>
                Mohu pro Vás ilustrovat knihy, články, weby, plakáty, zpracovat svatební oznámení, návrh na tetování nebo vyhotovit portrét. Projektům se meze nekladou!
            </p>
        </span>
        <br/>
        <span  className="quote">
            <p>
            Pro práce Martiny Fischmeister se nejvíce hodí slova „cool digital“.
            Její ilustrace rozhodně reprezentují trend v současné české ilustraci: povšimněte si živých barev, které září skrz monitory a stejně tak magazínové stránky.
            Martina má silnou kresbu a sebevědomě zachází s digitálními štětci. Snad nejvíce si je jistá v kreslení nejobávanější věci mezi ilustrátory – lidské figury a obličeje.
            V jejích ilustracích je rozkládá, ořezává a využívá zajímavého osvětlení. Je freerider mezi médii a její styl se hodí na různé zakázky.
            <br/>
            -Toybox
            </p>
        </span>
    </About>
    )