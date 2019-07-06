import React from 'react'
import styled from 'styled-components'


const Facebook= styled.img`
    position:fixed;
        bottom:120px;
        right:25px;
    width:70px;
    height:auto;
`
const Instagram= styled.img`
    position:fixed;
    
        bottom:30px;
        right:25px;
    width:70px;
    height:auto;
`



export default ()=>(
    <footer>
        <a href="https://www.facebook.com/martinafischmeister/" target="_blank">
            <Facebook src='/icons/facebook.svg'/>
        </a>

        <a href="https://www.instagram.com/fischmeisterr/" target="_blank">
            <Instagram src='/icons/instagram.svg'/>
        </a>
    </footer>
)
