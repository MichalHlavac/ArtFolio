import React,{Component} from 'react';

import styled from 'styled-components';

import LangNav from '../components/LangNav'

const Nav = styled.nav`
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
            padding-bottom:0px;
            padding-top:45px;
`
            
           



const Img=styled.img `
position:absolute;
top:0px;
right:5px;
margin:0px;
            padding: 10px;
            width:30px;
            height:auto;
`

 export default class BNav extends Component {
    
        state = {clicked:false};
         click =()=>{
            this.setState(prevState=>({
                clicked: !prevState.clicked
            }))
        };
    
        render(){
        if (this.state.clicked)
            {
                return (
                <Nav>
                    <Img src="/icons/menu.svg" onClick={this.click} />
                    <br/>
                    
                    <LangNav/>
                    
                
                </Nav>
                )
            }
        
                 return(
                <Nav>
                   <Img src="/icons/menu.svg" onClick={this.click}/>
                </Nav>
                )
            
        }
    };

  