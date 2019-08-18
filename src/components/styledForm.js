import styled from 'styled-components';

const CForm=styled.div `
    grid-column:2/12;
    grid-row:2/3;
    width:300px;
    max-width:100%;
    padding:15px;
    box-sizing:border-box;
    border:2px solid black;
    .thanks{}
    .Form{
        width:100%;
        input{display:block;
            width:100%;
            padding:2px;
            border-width:1px;};
        textarea{display:block;
            resize: none;
            width:100%;
            height:150px;
            padding:2px;
            border-width:1px;
            };
        button{
            background-color:transparent;
	        -moz-border-radius:24px;
	        -webkit-border-radius:24px;
	        border-radius:24px;
	        border:3px solid #000000;
	        display:inline-block;
	        color:#000000;
	        font-family:Arial;
	        font-size:17px;
	        font-weight:bold;
	        padding:11px 24px;
            margin:auto;
	        };
    }
 `
 export{CForm};