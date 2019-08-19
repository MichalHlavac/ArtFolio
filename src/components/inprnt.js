import React, {useContext} from 'react';
import styled from 'styled-components';
import {LangContext} from '../LangContext';
const Inprnt=styled.div `
    background-color:white;
    width:100%;
    max-width:100%;
    text-align:center;
    padding:20px 0;
    position: fixed;
    bottom:0;
    z-index:+2;
        a{ 
        font-size:18px;
        margin:5px;;
        display:inline;
        }
`

export default ()=>{
    const [lang,setLang]=useContext(LangContext);
    switch(lang){
        case 'en':
            return(<Inprnt>
                    <a href="https://www.inprnt.com/gallery/fischmeister/" target="blank">
                        You can purchase my prints at INPRNT.com
                    </a>
                </Inprnt>);
        case 'cz':
            return(<Inprnt>
                    <a href="https://www.inprnt.com/gallery/fischmeister/" target="blank">
                        Mé tisky můžete zakoupit na INPRNT.com
                    </a>
                </Inprnt>);
        default:null;
    }
}