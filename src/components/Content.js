import React,{useContext} from 'react';
import styled from 'styled-components';
import { LangContext } from "../LangContext";


const Contt = styled.div`
	max-width: 100%;
	margin-bottom: 30px;
	margin-left: auto;
	margin-right: auto;
`;
const Img = styled.img`
	display: block;
	text-align: center;
	margin: 20px auto;
	width: auto;
	height: auto;
	width: 100%;
	max-width:800px;
`;
const Description = styled.div`

	margin: auto;
	text-align: center;
	width: 800px;
	max-width: 100%;
`;

export default function Content (props){
	const content = props.content;
	const [lang, setLang] = useContext(LangContext);

	return (
		<div>
			<Description>
				<h1>{lang==='en'?content.nameEn:content.name}</h1>
				<p>{lang==='en'?content.descriptionEn:content.description}</p>
			</Description>
			<Contt>
				{content.resources.map((resource,i) => (
					<Img key={i} src={resource.image} alt={resource.name} />
				))}
			</Contt>
		</div>
	);
}
