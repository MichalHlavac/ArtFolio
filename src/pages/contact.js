import React,{useContext} from 'react';
import {LangContext} from '../LangContext';
import styled from 'styled-components';
import Form from '../components/contactForm';
const Contact=styled.div `
    display:grid;
    margin-bottom:110px;
    grid-template-columns:repeat(12,8.333vw);
    grid-auto-rows:minmax(1vw,auto);
    
    @media only screen and (min-width:960px) {
        .ilustration{
            grid-column:8/12;
            grid-row:2/5;
            
            img{
                margin:auto;
                width:auto;
                max-height:900px;
            }
        }
        h1{
        grid-column:2/6;
        grid-row:1/2;
        display:none;
    }
        .inprnt{
            margin-left:auto;
            margin-right:auto;
            grid-column:2/6;
            grid-row:4/5;
            
            a{
                font-size:calc(0.5em + 1vw);
                font-weight:bold;
                text-align:center;
            }
        }
        .main{
            grid-column:2/6;
            grid-row:2/3;
            margin:auto;
            text-align:center ;
            a{
                margin:15px 0;
                display:block;
                font-weight:bold;
                font-size:25px;
                
            }
        }
        .CForm{
            text-align:center;
            margin:auto;
            grid-column:2/6;
            grid-row:3/4;
        }
        .legal{
           display:none;
        }
        .footer{
            .link{
                grid-column:1/3;
                grid-row:1/2;
                margin:auto;
                display:inline;
                a{margin:0 30px}
            }
            .legal{
                margin:15px 0;  
                display:block;
                grid-row:1/2;
                text-align:right;
                margin-right:20px;
                p{display:inline-block;
                text-align:left;
                font-size:12px;
                margin:0 15px;}
                grid-column:3/4;

            }
        }
    }
    @media only screen and (max-width:960px) {
        .ilustration{
            display:none;
        }
        h1{
        grid-column:2/12;
        grid-row:1/2;
        visibility: hidden;
    }
        .inprnt{
        margin:auto;
        grid-column:2/12;
        grid-row:4/5;
        text-align:center;
            a{
                font-size:18px;
                font-weight:bold;
            }
        }
        .legal{
            grid-column:1/13;
            grid-row:6/7;
            text-align:center;
            p{text-align:left;}
            margin:50px auto 0 auto;
        }
        .main{
            grid-column:2/12;
            grid-row:2/3;
            margin:auto;
            a{
                text-align:center;
                margin:15px 0;
                display:block;
                font-weight:bold;
                font-size:20px;
            }
        }
        .CForm{
            margin:auto;
            grid-column:1/13;
            grid-row:3/4;
        }
        .footer{
            .link{ 
                grid-column:1/4;
                margin:10px auto;
                a{margin:0 10px}
                
            }
            .legal{
                display:none;}
        }
    }
.link{
    margin:16px;
    font-weight:bold;
   
    }
.footer{
    background-color:white;
    max-width:100%;
    width:100%;
    text-align:center;
    position: fixed;
    bottom:0;
    display:grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
};
`
export default()=>{
    const [lang,setLang]= useContext(LangContext);
    const Main =(
        <div className="main">
            <a href="mailto:fischmeister.art%40gmail.com">fischmeister.art&#064;gmail.com</a>
            <a href="tel:+420 607 028 769">+420 607 028 769</a>
        </div>
    );
    const Ilustration =(
        <figure className="ilustration">
            <img src="/graphic/contactIlustration.png" alt=""/>
        </figure>
    );
    const Legal =(
        <div className="legal">
                    <p>Martina Světlíková<br/>IČ: 07798164</p>
                    <p>V živnostenském rejstříku<br/> od 15.01.2019</p>
                </div>
        );
    const Link =(
        <div className="link">
            <a href="https://www.facebook.com/martinafischmeister/" target="_blank">Facebook</a>
            {"|"}
            <a href="https://www.instagram.com/fischmeisterr/" target="_blank"> Instagram </a>
            {"|"}
            <a href="https://www.behance.net/fischmeister" target="_blank">Behance</a>
        </div>
        );
    switch(lang){
    case 'en':
        return(
            <Contact>
                <h1>Contact Me</h1>
                {Ilustration}
                <Form/>
                {Main}
                <div className="inprnt">
                    <a href="https://www.inprnt.com/gallery/fischmeister/" target="blank">
                        You can purchase my prints at <u>INPRNT.com</u>
                    </a>
                </div>
                {Legal}
                <div className="footer">
                    {Link}
                    {Legal}
                </div>
            </Contact>
        );
    case 'cz' :
        return(
            <Contact>
                <h1>Kontaktujte mě</h1>
                {Ilustration}
                <Form/>
                {Main}
                <div className="inprnt">
                    <a href="https://www.inprnt.com/gallery/fischmeister/" target="blank">
                        Mé tisky můžete zakoupit na <u>INPRNT.com</u>
                    </a>
                </div>
                {Legal}
                <div className="footer">
                    {Link}
                    {Legal}
                </div>
            </Contact>
        );
    default:return null;
    }
}