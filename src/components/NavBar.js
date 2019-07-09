import React from 'react';
import styled from 'styled-components';
import LangNav from '../components/LangNav'

const NavBar = styled.div`
  @media only screen and (max-height:450px) and (orientation:landscape){
                display:none;}
                @media only screen and (max-width:800px) and (orientation:portrait){
                display:none;}
position:fixed;
top:0px;
right:0px;
z-index:+2;
width:100%;
text-align:right;
background-color: #ffff;
padding-bottom:10px;
padding-top: 10px;

                

                
`


export default()=>(

  <NavBar>
    <LangNav/>
  </NavBar>
);