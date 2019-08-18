import React,{useContext} from 'react';
import {LangContext} from '../LangContext';
import styled from 'styled-components';
import Form from '../components/contactForm';
const Contact=styled.div `
display:grid;
grid-template-columns:repeat(12,8.333vw);
grid-auto-rows:minmax(1vw,auto);
.basic{
    grid-column:2/12;
    grid-row:1/2;
    a{
        margin:5px 0;
        display:block;
    }
    };
.more{
    grid-column:1/13;
    text-align:center;
    padding:auto;
    position: fixed;
    bottom:0;
    background-color:black;
    color:white;
    a{  color:white;
        font-weight:bold;
        margin:5px 0;
        display:inline;
    }
};
`

const Message = ()=>{
    const [lang,setLang]= useContext(LangContext);
    switch(lang){
        case 'en':
            return(<p>You can find news and more of my art here:</p>);
        case 'cz' :
            return(<p>Novinky a další ukázky tvorby naleznete zde:</p>);
        default:return null;}};

export default () =>(
    <Contact>
        <div className="basic">
            <p>Martina Světlíková</p>
            <p>Volutová 2521/18<br/> 158 00<br/> Praha 5 - Stodůlky</p>
            <p>IČ: 07798164</p>
            <p>Fyzická osoba zapsaná<br/> v Živnostenském rejstříku od <br/>15.01.2019</p>
            <a href="mailto:fischmeister.art%40gmail.com">fischmeister.art&#064;gmail.com</a>
            <a href="tel:+420 607 028 769">tel.+420 607 028 769</a>
            
            
        </div>
        <div className="more">
            <Message/>
            <a href="https://www.facebook.com/martinafischmeister/" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/fischmeisterr/" target="_blank">Instagram</a>
            <a href="https://www.behance.net/fischmeister">Behance</a>
        </div>
        <Form/>
    </Contact>
    );