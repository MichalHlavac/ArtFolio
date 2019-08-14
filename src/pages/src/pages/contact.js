import React,{useContext} from 'react';
import {LangContext} from '../LangContext';


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
    <div>
        <h1>Kontakt</h1>
        <div>
            <p>fischmeister.art@gmail.com<br/>
                tel. 00420 607 028 769<br/>
                IČ: 07798164
            </p>
            <Message/>
            <a href="https://www.facebook.com/martinafischmeister/" target="_blank">Facebook</a>
            <a href="https://www.instagram.com/fischmeisterr/" target="_blank">Instagram</a>
            <a>Behance</a>
        </div>
    </div>
    );