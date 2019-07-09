import React from 'react';
import styled from 'styled-components';

const Social=styled.div `
            text-align:center;

            @media only screen and (min-height:450px)  and (orientation:landscape){
                display:inline;
                margin:10px 20px 10px 40px;}
            @media only screen and (min-width:800px) and (orientation: portrait){
                display:inline;
                margin:10px 20px 10px 40px;}
                
                
                
`
const SIcon=styled.img`
                width:30px;
                height:30px;
                margin:0px 5px 0px 5px;
`




export default ()=>(
    <Social>
        <a href="https://www.facebook.com/martinafischmeister/" target="_blank">
            <SIcon src='/icons/facebook.svg'/>
        </a>

        <a href="https://www.instagram.com/fischmeisterr/" target="_blank">
            <SIcon src='/icons/instagram.svg'/>
        </a>
    </Social>
);
