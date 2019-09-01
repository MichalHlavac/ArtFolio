import React,{useContext} from 'react';
import styled,{keyframes} from 'styled-components';
import {slideInDown} from 'react-animations';
import LangNav from '../components/LangNav'
import Navigate from '../components/Navigate';
import Social from '../components/SocialNW';
import Logo from '../components/Logo';
import {NavContext} from '../NavContext';

const fadeInAnimation = keyframes `${slideInDown}`;

const OpenNav = styled.nav`
    animation: 2s ${fadeInAnimation};
    @media only screen and (min-height:450px)  and (orientation:landscape){
        display:none;}
    @media only screen and (min-width:800px) and (orientation: portrait){
        display:none;}
    position:fixed;
    top:0px;
    left:0px;
    z-index:+2;
    background-color: #ffff;
    width:100%;
    padding-bottom:10px;
    padding-top: 10px; 
    display:grid;
    grid-template-columns:repeat(12,8.333vw);
    grid-auto-rows:minmax(1vw,auto);
    .LangNav{
    grid-column:1/4;
    grid-row:1/2;
    padding:10px;
  }
 
  .Social{
    grid-column:1/13;
    grid-row:3/4;
    margin:auto;}
  .Navigate{
    grid-column:1/13;
    grid-row:2/3;
  }   
`
const ClosedNav=styled.nav `
 @media only screen and (min-height:450px)  and (orientation:landscape){
        display:none;}
    @media only screen and (min-width:800px) and (orientation: portrait){
        display:none;}
    position:fixed;
    top:0px;
    left:0px;
    z-index:+2;
    background-color: #ffff;
    width:100%;
    padding-bottom:10px;
    padding-top: 10px; 
    display:grid;
    grid-template-columns:repeat(12,8.333vw);
    grid-auto-rows:minmax(1vw,auto);
 .Logo{
    grid-column:1/6;
    grid-row:1/2;
    margin-left:10px;}
`
const Img=styled.img `
    grid-column:11/13;
    grid-row:1/2;
    width:30px;
    height:auto;
    padding:10px;
    margin:auto;
`
 export default function BNav() {
    const [click, setClick] =useContext(NavContext);
    const close=()=>setClick(false);
    const open=() =>setClick(true);
        if (click){
            return (
                <OpenNav>
                    <Img src="/icons/close.svg" alt="close" onClick={close} />
                    <br/>
                    <LangNav/>
                    <Navigate/>
                    <Social/>
                </OpenNav>)}
        return(
            <ClosedNav>
                <Logo/>
                <Img src="/icons/menu.svg" alt="open" onClick={open}/>
            </ClosedNav>)};

  