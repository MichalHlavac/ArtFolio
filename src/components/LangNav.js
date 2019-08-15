import React,{useState,useContext} from 'react';
import {Link} from '@reach/router';
import styled from 'styled-components';
import {LangContext} from '../LangContext';

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
  const [lang,setLang]= useContext(LangContext);
  return(
      <div className="LangNav">
        <LLink onClick={()=>setLang('cz')} to='/'>CZ</LLink>
        <LLink onClick={()=>setLang('en')} to='/en'>EN</LLink>
      </div>)
};