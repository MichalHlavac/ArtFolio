import React from 'react';
import styled from 'styled-components';
import LangNav from '../components/LangNav';
import Navigate from '../components/Navigate';
import Social from '../components/SocialNW';
import Logo from '../components/Logo';

const NavBar = styled.nav`
  @media only screen and (max-height:450px) and (orientation:landscape){
    display:none;}
  @media only screen and (max-width:800px) and (orientation:portrait){
    display:none;}
  position:fixed;
  top:0px;
  right:0px;
  z-index:+2;
  width:100%;
  background-color: #ffff;
  padding-bottom:10px;
  padding-top: 10px;      
  display:grid;
  grid-template-columns:repeat(12,8.333vw);
  grid-auto-rows:minmax(1vw,auto); 
  .LangNav{
    grid-column:11/13;
    grid-row:1/2;
    margin:auto;
    padding-right:10px;
  }
  .Logo{
    grid-column:1/3;
    grid-row:1/2;
    margin-left:10px;}
  .Social{
    grid-column:9/11;
    grid-row:1/2;
    margin:auto;}
  .Navigate{
    grid-column:3/9;
    grid-row:1/2;
    margin-left:auto;
  }   
`
export default()=>(
  <NavBar>
    <LangNav/>
    <Navigate/>
    <Social/>
    <Logo/>
  </NavBar>
);