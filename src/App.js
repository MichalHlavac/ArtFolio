import React from 'react';
import {Root, Routes} from 'react-static';
import styled, {createGlobalStyle} from 'styled-components';
import BurgerNav from './components/BurgerNav'
import NavBar from './components/NavBar';
import {LangProvider} from './LangContext';
import {NavProvider} from './NavContext';

const GlobalStyle = createGlobalStyle`
  body {
    background-color:whitesmoke;
    h1{font-size:25px;}
    h2{font-size:20px;}
    p{font-size:16px}
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
              <NavProvider>
            <BurgerNav/>
            <NavBar/>
              </NavProvider>
            <Body>
              <Routes path="*"/>
            </Body>
            </LangProvider>
          </React.Suspense>
        </Root>
  )};
  export default App
  