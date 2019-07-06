import React from 'react'
import {Root, Routes} from 'react-static'
import LangNav from './components/LangNav'
import Footer from './components/Footer'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  
  body {
    font-family:Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    width:100%;
    height:100%;
    box-sizing:border-box;
  }
  a {
    text-decoration: none;
    color: black;
  }

  img {
    max-width: 100%;
  }
`;
const Body=styled.div `
margin-top:80px;
margin-bottom:20px;
`;




function App() {
  return (
        <Root>
    <React.Suspense fallback={<em>Loading...</em>}>
          <GlobalStyle/>
          <LangNav/>
          <Body>
          
        <Routes path="*"/>
        </Body>
          <Footer/>
          </React.Suspense>
        </Root>
  )}
  export default App
  