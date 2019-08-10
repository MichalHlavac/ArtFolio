import React from 'react';
import styled from 'styled-components';


const Contt=styled.div `
              display:flex;
              flex-wrap:wrap;
              justify-content:center;
              margin-left:auto;
              margin-right:auto;
              margin-bottom:30px;
              max-width:2480px;
              border-bottom: 1px solid gray;


`
const Img=styled.img`
`
const Item=styled.div `
            width:600px;
            margin:10px 10px 10px 10px;
            display:inline-block;
            overflow:hidden;
`

  


export default function Content(props){
const content = props.content;

return(
        <Contt>
            
            
          {content.resources.map(resource =>(
            <Item className='index' key={resource.name}>
              <Img  src={resource.image} alt={resource.id}/>
              <h2>{resource.name}</h2>
              <p>{resource.description}</p>
            </Item>))}             
        </Contt>
    )

};