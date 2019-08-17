import React,{useContext} from 'react';
import {LangContext} from '../LangContext';
import styled from 'styled-components';

const Contact=styled.div `
display:grid;
grid-template-columns:repeat(12,8.333vw);
grid-auto-rows:minmax(1vw,auto);
.basic{
    grid-column:2/12;
    grid-row:1/2;
    };
.more{
    grid-column:2/12;
    grid-row:2/3;
    display:block;
    a{
        font-weight:bold;
        margin:5px;
        display:block;
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
            <a>fischmeister.art@gmail.com</a>
            <a>tel. 00420 607 028 769</a>
            <p>IČ: 07798164</p>
            
        </div>
        <div className="more">
            <Message/>
            <a href="https://www.facebook.com/martinafischmeister/" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/fischmeisterr/" target="_blank">Instagram</a>
            <a href="https://www.behance.net/fischmeister">Behance</a>
        </div>
    </Contact>
    );