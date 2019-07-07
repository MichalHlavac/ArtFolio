import React from 'react'
import styled from 'styled-components'


const Facebook= styled.img`
    
    width:25px;
    height:auto;
`
const Instagram= styled.img`
    
    width:25px;
    height:auto;
`



export default ()=>(
    <div>
        <a href="https://www.facebook.com/martinafischmeister/" target="_blank">
            <Facebook src='/icons/facebook.svg'/>
        </a>

        <a href="https://www.instagram.com/fischmeisterr/" target="_blank">
            <Instagram src='/icons/instagram.svg'/>
        </a>
    </div>
)
