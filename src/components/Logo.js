import React from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router'
import {LangContext} from '../LangContext';
const Logo=styled.img `
    margin:0px;
    padding:0px;
    width:auto;
    height:40px;
`
export default function (){
    const [lang,setLang] = useContext(LangContext);
    switch(lang){
      case 'en':
        return(
          
            <Link to='/en'>
                <Logo className="Logo" src="/icons/logo2.svg"/>
            </Link>
            );
      case 'cz' :
        return(
          
            <Link to='/'>
                <Logo className="Logo" src="/icons/logo2.svg"/>
            </Link>
            
          );
      default:return null;}};
