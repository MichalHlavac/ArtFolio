import React,{useContext} from 'react'
import {Link} from '@reach/router'
import styled from 'styled-components'
import {LangContext} from '../LangContext';

const SLink=styled(Link) `
  @media only screen and (min-height:450px)  and (orientation:landscape){
    display:inline;}
  @media only screen and (min-width:800px) and (orientation: portrait){
    display:inline;}
  @media only screen and (max-height:450px) and (orientation:landscape){
    display:block;}
  @media only screen and (max-width:800px) and (orientation:portrait){
    display:block;}
  font-family: Arial;
  color: black;
  text-decoration:none;
  text-align: center;
  font-size:25px;
  margin:10px 20px 10px 20px;
`
export default function (){
    const [lang,setLang] = useContext(LangContext);
    switch(lang){
      case 'en':
        return(
          <div className="Navigate">
            <SLink to='/en'>Portfolio</SLink>
            <SLink to='/en/about-me'>About Me</SLink>
            <SLink to='/contact'>Contact</SLink>
          </div>);
      case 'cz' :
        return(
          <div className="Navigate">
            <SLink to='/'>Portfolio</SLink>
            <SLink to='/o-me'>O Mě</SLink>
            <SLink to='/contact'>Kontakt</SLink>
          </div>);
      default:return null;}};