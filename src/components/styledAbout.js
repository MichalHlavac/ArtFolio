import styled from 'styled-components';

const About = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-auto-rows: minmax(1fr, auto);
	.portrait {
		grid-column: span 12;
		grid-row: span 1;
		width: 300px;
		border-radius: 50%;
		max-width: 90%;
		margin: auto;
	}
	.about {
		@media only screen and (max-width: 800px) {
			grid-column: 2/12;
		}
        text-align:center;
		grid-column: 3/11;
		grid-row: span 1;
	}
	.contacts {
		@media only screen and (max-width: 800px) {
			grid-column: 2/12;
            grid-row: span 1;
		}
        width:100%;
        margin:auto;
        text-align:center;
		grid-column: 3/11;
		grid-row: span 1;

		a {
			font-family: 'Roboto', sans-serif;
		}}
		.clients {
			@media only screen and (max-width: 800px) {
				grid-column: 2/12;
				grid-row: span 1;
			}
			width:100%;
			margin:auto;
			text-align:center;
			grid-column: 3/11;
			grid-row: span 1;
	
			a {
				font-family: 'Roboto', sans-serif;
			}
	}
	.awards {
			@media only screen and (max-width: 800px) {
				grid-column: 2/12;
				grid-row: span 1;
			}
			width:100%;
			margin:auto;
			text-align:center;
			grid-column: 3/11;
			grid-row: span 1;
	
	}
	.legal {
			@media only screen and (max-width: 800px) {
				grid-column: 2/12;
				grid-row: span 1;
			}
			width:100%;
			padding-top:10vh;
			margin:auto;
			text-align:center;
			grid-column: 3/11;
			grid-row: span 1;
	
	}
`;
export { About };
