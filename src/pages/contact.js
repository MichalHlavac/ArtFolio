import React,{useContext} from 'react';
import {LangContext} from '../LangContext';
import styled from 'styled-components';
import Form from '../components/contactForm';
const Contact=styled.div `
display:grid;
margin-bottom:150px;
grid-template-columns:repeat(12,8.333vw);
grid-auto-rows:minmax(1vw,auto);
.contact{
    grid-column:2/12;
    grid-row:2/3;
    a{
        margin:5px 0;
        display:block;
    }
}
.basic{
    grid-column:2/12;
    grid-row:3/4;
    };
.more{
    background-color:white;
    max-width:100%;
    width:100%;
    text-align:center;
    padding-bottom:15px;
    position: fixed;
    bottom:0;
    p{
        display:inline-block;
        font-size:20px;
        margin:16px;
    }
    div{display:inline-block;}
    a{ 
        font-weight:bold;
        margin:10px;
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
        </div>
        <div className="contact">
            <a href="mailto:fischmeister.art%40gmail.com">fischmeister.art&#064;gmail.com</a>
            <a href="tel:+420 607 028 769">tel.+420 607 028 769</a>
        </div>
        <div className="more">
            <Message/>
            <div>
            <a href="https://www.facebook.com/martinafischmeister/" target="_blank">Facebook</a>
            {"|"}
            <a href="https://www.instagram.com/fischmeisterr/" target="_blank"> Instagram </a>
            {"|"}
            <a href="https://www.behance.net/fischmeister" target="_blank">Behance</a>
            </div>
        </div>
        <Form/>
    </Contact>
    );