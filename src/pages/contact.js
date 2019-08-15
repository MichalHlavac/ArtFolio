import React,{useContext} from 'react';
import {LangContext} from '../LangContext';
import styled from 'styled-components';

const Contact=styled.div `
display:grid;
grid-template-columns:repeat(12,8.333vw);
grid-auto-rows:minmax(1vw,auto);
.basic{
    grid-column:1/13;
    grid-row:1/2;
    };
.more{
    grid-column:1/13;
    grid-row:2/3;
};
`

const Message = ()=>{
    const [lang,setLang]= useContext(LangContext);
    switch(lang){
    case 'en':
      return(
        <p>You can find news and more of my art here:</p>);
    case 'cz' :
      return(
        <p>Novinky a další ukázky tvorby naleznete zde:</p>);
    default:return null;}};

export default () =>(
    <Contact>
        <div className="basic">
            <p>fischmeister.art@gmail.com<br/>
                tel. 00420 607 028 769<br/>
                IČ: 07798164
            </p>
        </div>
        <div className="more">
            <Message/>
            <a href="https://www.facebook.com/martinafischmeister/" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/fischmeisterr/" target="_blank">Instagram</a>
            <a>Behance</a>
        </div>
    </Contact>
    );