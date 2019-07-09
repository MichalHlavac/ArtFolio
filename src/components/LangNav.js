import React from 'react';
import {Link} from '@reach/router';
import styled from 'styled-components';
import Navigate from '../components/Navigate'



const LangNav = styled.div`
position:absolute;
top:15px;
left:20px;
margin:0px;
text-align:center;`

const LLink=styled(Link) ` 
                display: inline;
                font-family: Arial;
                color: black;
                text-decoration:none;
                text-align: center;
                font-size:25px;
                padding:5px;
`

export default class NBar extends React.Component {
  state = {language:'cz'};
  toCz=()=>{ this.setState({language:'cz'})};
  toEn=()=>{this.setState({language:'en'})};
  
  
  
  render(){  
  return(
    <div>
      
    
      <Navigate lang={this.state.language}/>
   
      <LangNav>
        <LLink onClick={this.toCz} to='/'>CZ</LLink>
        <LLink onClick={this.toEn} to='/en'>EN</LLink>
      </LangNav>
    </div>)
}}