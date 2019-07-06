import React from 'react'
import {Link} from '@reach/router'
import styled from 'styled-components'
import NavBar from 'components/NavBar'
import BurgerNav from 'components/BurgerNav'

const Header = styled.header`
position:fixed;
top:0px;
right:0px;
z-index:+2;
width:100%;
;

background-color: #ffff;
padding-bottom:10px;
padding-top: 5px;
`

const LangNav = styled.nav`
position:absolute;

right:5px;
margin:0px;
padding-top: 5px;


text-align:center;
a{
  padding: 10px;
  font-family: Arial;
  text-decoration: none;
  color: black;
  font-size:25px;
};
`

export default class Nav extends React.Component {
  state = {language:'cz'};
  toCz=()=>{ this.setState({language:'cz'})};
  toEn=()=>{this.setState({language:'en'})};
  render(){  
  return(
    <Header>
    <LangNav>
        <Link onClick={this.toCz} to='/'>CZ</Link>
        <Link onClick={this.toEn} to='/en'>EN</Link>
    </LangNav>
    <NavBar lang={this.state.language}/>
    <BurgerNav lang={this.state.language}/>
    </Header>)
}}