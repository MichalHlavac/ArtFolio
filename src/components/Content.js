import React from "react";
import styled from "styled-components";

const Contt = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  max-width: 2480px;
  border-bottom: 1px solid gray;
`;
const Img = styled.img`
  width: 600px;
  height: auto;
`;
const Item = styled.figure`
  width: 600px;
  margin: 10px 10px 10px 10px;
  display: inline-block;
  overflow: hidden;
`;
const Description = styled.div`
  margin: auto;
  text-align: center;
  width: 900px;
  max-width: 80%;
`;

export default function Content(props) {
  const content = props.content;

  return (
    <div>
      <Description>
        <h1>{content.name}</h1>
        <p>{content.description}</p>
      </Description>
      <Contt>
        {content.resources.map(resource => (
          <Item className='index' key={resource.name}>
            <Img src={resource.image} alt={resource.name} />
          </Item>
        ))}
      </Contt>
    </div>
  );
}
