import React from 'react';
import {Root, Routes} from 'react-static';
import styled, {createGlobalStyle} from 'styled-components';
import BurgerNav from './components/BurgerNav'
import NavBar from './components/NavBar';
import {LangProvider} from './LangContext';

const GlobalStyle = createGlobalStyle`
  body {
    font-family:Arial, Helvetica, sans-serif;
    font-size:95%;
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
`

const Body=styled.div `
            margin-top:80px;
            margin-bottom:20px;
`
function App() {
  return (
        <Root>
          <React.Suspense fallback={<em>Loading...</em>}>
            <GlobalStyle/>
            <LangProvider>
            <BurgerNav/>
            <NavBar/>
            <Body>
              <Routes path="*"/>
            </Body>
            </LangProvider>
          </React.Suspense>
        </Root>
  )};
  export default App
  