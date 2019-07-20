import React,{useState} from 'react';
import {Link} from '@reach/router';
import styled from 'styled-components';
import Navigate from '../components/Navigate'

const LangNav = styled.div`
  position:absolute;
  top:15px;
  left:20px;
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

export default function NBar (){
  const [language,setLanguage]= useState('cz');
  const toCz=()=>setLanguage('cz');
  const toEn=()=>setLanguage('en');
  return(
    <div>
      <Navigate lang={language}/>
      <LangNav>
        <LLink onClick={toCz} to='/'>CZ</LLink>
        <LLink onClick={toEn} to='/en'>EN</LLink>
      </LangNav>
    </div>)
};