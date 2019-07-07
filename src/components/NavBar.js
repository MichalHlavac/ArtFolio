import React from 'react'
import {Link} from '@reach/router'
import styled from 'styled-components'
import Footer from '../components/Footer'

const NavBar = styled.nav`
@media only screen and (max-height:450px) and (orientation:landscape){
    display:none;
}
@media only screen and (max-width:700px) and (orientation:portrait){
  display:none;
}

padding: 5px;
background: #ffff;
text-align:center;
a{
  padding: 10px;
  font-family: Arial;
  text-decoration: none;
  color: black;
  font-size:25px;
};
`

export default function (props){
const language = props.lang;



switch(language){
  case 'en':
  return(
    <NavBar>
    
    <Link to='/en'>Portfolio</Link>
    <Link to='/en/about-me'>About Me</Link>
    <Link to='/en/contact'>Contact</Link>
    <Footer/>
    </NavBar>
);

  case 'cz' :
  return(
<NavBar>
    
    <Link to='/'>Portfolio</Link>
    <Link to='/o-me'>O Mě</Link>
    <Link to='/kontakt'>Kontakt</Link>

</NavBar>
);
default:
return null;
}



}