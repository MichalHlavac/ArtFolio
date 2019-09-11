import React from 'react';
import {About} from '../components/styledAbout'

export default () =>(
    <About lang="en">
        <img className="portrait" src="/IMG/profileImg.jpg" alt="Martina Fischmeister"/>
        <span className="head">
            <h1>Martina Fischmeister *1995</h1>
            <p>Czech illustrator and painter, residing and working in Prague.</p>
        </span>
    
        <p className="about">
            I studied painting at Private art high school of design s.r.o. (akad. mal. Jaroslav Klát) and finished my degree at Art{"&"}Design Institut, field of Fine Arts under guidance of doc. Roman Franta and prof. Jiří Lindovský.
            I‘m profesionally making book and editorial illustration, also comics, tattoo design and oilpainting.
            My illustrations are regularly being published in newspaper Právo, magazine Salon and also in books on the czech and foreign market.
        </p>

        <span className="offer">
            <h2>What can I do for You?</h2>
            <p>
            I can illustrate Your books, websites, posters, wedding invitations, tattoo designs or make a portrait for you. There are no limits to projects!
            </p>
        </span>
        <span className="awards">
            <h2>Awards</h2>
        <figure>
        <img src="/graphic/adobeAward.png" alt=""/>
        <figcaption>I was awarded Top Talent of Adobe Design Achievement Awards 2019 in the Illustration category.</figcaption>
        </figure>
        </span>
        <span  className="quote">
            <h2>Said about me</h2>
            <p>
            For the work of Martina Fischmeister the most suitable words are „cool digital“.
            Her illustrations definetly represent a trend in the contemporary czech illustration: please note the juicy colours that seem to shine out of the digital monitors as well as magazine‘s pages.
            Martina has a sovereign drawing and confident treatment of brushes.
            She is clearly very comfortable with drawing the most dreaded thing between illustrators – the human figure and the human face.
            In her illustration she cuts them, sinks them under different kinds of liquids and uses interesting lighting. She is a media freerider and her style suits well to different comissions.
            <br/>
            -Toybox
            </p>
        </span>
    </About>
    )