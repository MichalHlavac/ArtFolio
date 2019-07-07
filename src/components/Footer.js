import React from 'react'
import styled from 'styled-components'

const Social=styled.div `
display:inline;
padding-left:50px;
.a{display:inline}
`
const Facebook= styled.img`
    
    width:30px;
    height:30px;
`
const Instagram= styled.img`
    
    width:30px;
    height:30px;
`



export default ()=>(
    <Social>
        <a href="https://www.facebook.com/martinafischmeister/" target="_blank">
            <Facebook src='/icons/facebook.svg'/>
        </a>

        <a href="https://www.instagram.com/fischmeisterr/" target="_blank">
            <Instagram src='/icons/instagram.svg'/>
        </a>
    </Social>
)
