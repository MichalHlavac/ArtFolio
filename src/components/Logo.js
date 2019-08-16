import React,{useContext} from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router'
import {LangContext} from '../LangContext';
const Logo=styled(Link) `
    margin:0px;
    padding:0px;
`
const Img=styled.img `
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
          
            <Logo to='/en'>
                <Img className="Logo" src="/icons/logo2.svg"/>
            </Logo>
            );
      case 'cz' :
        return(
          
            <Logo to='/'>
                <Img className="Logo" src="/icons/logo2.svg"/>
            </Logo>
            
          );
      default:return null;}};
