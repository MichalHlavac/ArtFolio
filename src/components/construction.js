import React from 'react'
import styled from 'styled-components'

const Under=styled.div `
position:relative;
top:5vw;
`
const Construction = styled.div `
position:relative;
`
const Orange = styled.img `
animation: gear-spin infinite 20s linear;
height: 20vw;
  width:auto;
  position:absolute;
  top:34vw;
  left:10vw;
  pointer-events: none;

  @keyframes gear-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

const Blue = styled.img `
animation: gear-spin-left infinite 20s linear;
height: 20vw;
  width:auto;
  position:absolute;
  top:17vw;
  left:0vw;
  pointer-events: none;

  @keyframes gear-spin-left {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
`
const Yelow = styled.img `
animation: gear-spin infinite 20s linear;
  height: 20vw;
  width:auto;
  position:absolute;
  left:10vw;
  pointer-events: none;

 
`

const H1=styled.h1 `
          position:relative;
          top:20vw;
          right:-40vw;
          color:black;
          width:53%;
          padding-left:5%;

          @media only screen and (max-width:600px){
          font-size:calc(1.75em + 1vw);}

          @media only screen and (min-width:600px){
            font-size:calc(2.5em + 2vw)}
`

export default ()=>(
    <Under>
        
<Construction>
<Yelow src='/graphic/yelow-gear.svg'/>
<Blue src='/graphic/blue-gear.svg'/>
<Orange src='/graphic/orange-gear.svg'/>

</Construction>
<H1>This page is under construction</H1>
</Under>
)