import React from 'react';
import {Link} from '@reach/router';
import styled from 'styled-components';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const Nav=styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    max-width:1650px;
    margin-left:auto;
    margin-right:auto;
`
const PortImg=styled.img`
    position:relative;
    height:400px;
    width:400px;
    object-fit:cover;
`
const Box=styled.div `
    position:relative;
    box-sizing:border-box;
    overflow:hidden;
    text-align:center;
    width:400px;
    height:400px;
    overflow:hidden;
    margin:5px 5px 5px 5px;
`
const Overlay= styled.span`
    position:absolute;
    z-index:1;
    width:100%;
    height:100%;
    max-width:400px;
    max-height:400px;
    opacity:0;
    padding:160px 0;
    box-sizing:border-box;
    @media (hover: none)
        { opacity:1;
            background-color: rgba(0,0,0,0.6);
        color:white;
        position:absolute;
        bottom:0;
        width:100%;
        height:120px;
        padding:40px;
        h1{margin:auto 0;}
        }
    @media(hover: hover){${Box} &:hover{
        opacity:1;
        background-color: rgba(0,0,0,0.5);
        color:white;}}
`
export default function PortNav(props){
    const lang = props.lang;
    const Articles = props.articles;
    const items = Articles.map(article => 
        
        <Box className='index' key={article.id}>
            <Link to={`/${lang}portfolio/${article.id}`}>
                <Overlay>
                    <h1>{article.name}</h1>
                </Overlay>
                <PortImg src={article.image} alt={article.name} />
            </Link>
        </Box>
        );
    return(
        <Nav>{items}</Nav>);};
