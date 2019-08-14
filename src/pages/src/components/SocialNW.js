import React from 'react';
import styled from 'styled-components';

const SIcon=styled.img`
                width:25px;
                height:25px;
                padding:5px;
`




export default ()=>(
    <div className="Social">
        <a href="https://www.facebook.com/martinafischmeister/" target="_blank">
            <SIcon src='/icons/facebook.svg'/>
        </a>

        <a href="https://www.instagram.com/fischmeisterr/" target="_blank">
            <SIcon src='/icons/instagram.svg'/>
        </a>
    </div>
);
