
import React,{Component} from 'react'
import {Link} from '@reach/router'
import styled from 'styled-components'
import Footer from './components/Footer'

const Nav = styled.nav`

@media only screen and (min-height:450px)  and (orientation:landscape){
    display:none;
}
@media only screen and (min-width:700px) and (orientation: portrait){
  display:none;
}
position:absolute;
top:0px;
left:0px;
z-index:-1;
background-color: #ffff;
width:100%;
padding-bottom:0px;
`


const Items=styled.div`
a{
display:block;
    font-family: Arial;
  color: black;
  text-decoration:none;
  text-align: center;
  font-size:25px;
}
`
const Img=styled.img `
padding: 15px;
width:30px;
height:auto;
`

 export default class BurgerNav extends Component {
    
        state = {clicked:false};
         click =()=>{
            this.setState(prevState=>({
                clicked: !prevState.clicked
            }))
        };
    
        render(){
        if (this.state.clicked&&this.props.lang ==='cz')
            {
                return (
                <Nav>
                <Img src="/icons/menu.svg" onClick={this.click} />
                <br/>
                <Items>
                <Link onClick={this.click} to='/'>Portfolio</Link>
                <Link onClick={this.click} to='/o-me'>O Mě</Link>
                <Link onClick={this.click} to='/kontakt'>Kontakt</Link>
                <Footer/>
                </Items>
                </Nav>
                )
            }
        else if  (this.state.clicked&&this.props.lang === 'en'){
                return(
                    <Nav>
                        <Img src="/icons/menu.svg"onClick={this.click} />
                        <br/>
                        <Items>
                        <Link onClick={this.click} to='/en'>Portfolio</Link>
                        <Link onClick={this.click} to='/en/about-me'>About Me</Link>
                        <Link onClick={this.click} to='/en/contact'>Contact</Link>
                        
                        </Items>
                    </Nav>   
                )
        }
                 return(
                <Nav>
                   <Img src="/icons/menu.svg" onClick={this.click}/>
                </Nav>
                )
            
        }
    }

  