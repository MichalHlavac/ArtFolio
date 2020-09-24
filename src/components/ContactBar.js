import React from 'react';

import styled from 'styled-components';

const ContactBarWrapper = styled.span`
	position: fixed;
	bottom: 0px;
	right: 0px;
	z-index: +2;
	width: 100%;
`;
const Content = styled.div`
text-align:center;
	margin: auto;
	max-width: 1200px;
    height:50px; 
	background-color: #ffff;
    padding-top:20px;
    p{display:inline;
    font-size:22px}
    @media only screen and (max-width:800px){
    padding:5px;
    height:80px;
    p{display:none;}
}
`
const Item =styled.a `
font-size:20px;
margin:20px;
@media only screen and (max-width:800px){
    display:block;
    margin:10px;
}
`

export const ContactBar = () => {
	return (
		<ContactBarWrapper>
			<Content>
                <Item href="mailto:fischmeister.art%40gmail.com">fischmeister.art&#064;gmail.com</Item>
                <p>|</p>
                <Item href="tel:+420 607 028 769">+420 607 028 769</Item>
            </Content>
		</ContactBarWrapper>
	);
};
