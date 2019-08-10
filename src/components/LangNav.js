import React,{useState} from 'react';
import {Link} from '@reach/router';
import styled from 'styled-components';
import Navigate from '../components/Navigate'

const LangNav = styled.div`
  @media only screen and (max-height:450px) and (orientation:landscape){
    position:absolute;
  top:15px;
  left:20px;};
  @media only screen and (max-width:800px) and (orientation:portrait){
    position:absolute;
  top:15px;
  left:20px;};
  position:absolute;
  top:15px;
  left:200px;
  margin:0px;
  text-align:center;`

const LLink=styled(Link) ` 
  display: inline;
  font-family: Arial;
  color: black;
  text-decoration:none;
  text-align: center;
  font-size:25px;
  padding:5px;
`
const Logo=styled.img `
 @media only screen and (max-height:450px) and (orientation:landscape){
    display:none;}
  @media only screen and (max-width:800px) and (orientation:portrait){
    display:none;}
    position:absolute;
    top:10px;
    left:15px;
    margin:0px;
    padding:0px;
    width:auto;
    height:40px;
`

export default function NBar (){
  const [language,setLanguage]= useState('cz');
  const toCz=()=>setLanguage('cz');
  const toEn=()=>setLanguage('en');
  return(
    <div>
      <Logo src="/icons/logo2.svg"/>
      <Navigate lang={language}/>
      <LangNav>
        <LLink onClick={toCz} to='/'>CZ</LLink>
        <LLink onClick={toEn} to='/en'>EN</LLink>
      </LangNav>
    </div>)
};