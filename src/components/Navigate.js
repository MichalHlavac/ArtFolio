import React from 'react'
import {Link} from '@reach/router'
import styled from 'styled-components'
import Social from '../components/SocialNW';

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
  margin:10px 40px 10px 40px;
`
export default function (props){
    const language = props.lang;
    switch(language){
      case 'en':
        return(
          <nav>
            <SLink to='/en'>Portfolio</SLink>
            <SLink to='/en/about-me'>About Me</SLink>
            <SLink to='/en/contact'>Contact</SLink>
            <Social/>
          </nav>);
      case 'cz' :
        return(
          <nav>
            <SLink to='/'>Portfolio</SLink>
            <SLink to='/o-me'>O Mě</SLink>
            <SLink to='/kontakt'>Kontakt</SLink>
            <Social/>
          </nav>);
      default:return null;}};