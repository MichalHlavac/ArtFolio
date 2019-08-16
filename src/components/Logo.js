import React,{useContext} from 'react';
import styled from 'styled-components';
import {Link} from '@reach/router'
import {LangContext} from '../LangContext';
const Logo=styled.div `
    margin:0px;
    padding:0px;
    width:auto;
    height:40px;
`
const Img=styled.img `
height:100%;
`
export default function (){
    const [lang,setLang] = useContext(LangContext);
    switch(lang){
      case 'en':
        return(
          <Logo className="Logo">
            <Link to='/en'>
                <Img src="/icons/logo2.svg"/>
            </Link>
          </Logo>
            );
      case 'cz' :
        return(
            <Logo className="Logo" >
            <Link to='/'>
                <Img src="/icons/logo2.svg"/>
            </Link>
          </Logo>
          );
      default:return null;}};
