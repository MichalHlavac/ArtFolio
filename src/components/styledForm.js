import styled from 'styled-components';

const CForm=styled.div `
    grid-column:2/12;
    grid-row:1/2;
    width:300px;
    max-width:100%;
    padding:15px;
    box-sizing:border-box;
    border:1px solid black;
    .thanks{}
    .Form{
        width:100%;
        text-align:center;
        input{display:block;
            width:100%;
            padding:2px;
            border:1px solid black;
            margin-bottom:5px;
            };
        textarea{display:block;
            resize: none;
            width:100%;
            height:150px;
            padding:2px;
            border:1px solid black;
            margin-bottom:5px;
            };
        button{
            background-color:transparent;
	        
	        border:1px solid #000000;
	        display:inline-block;
	        color:#000000;
	        font-family:Arial;
	        font-size:14px;
	        font-weight:bold;
	        padding:11px 24px;
            margin:auto;
	        };
    }
 `
 export{CForm};