import styled from 'styled-components';

const CForm=styled.div `
    width:600px;
    max-width:100%;
    padding:15px;
    box-sizing:border-box;
    
    .thanks{
        font-size:20px;
    }
    .Form{
        width:100%;
        text-align:center;
        input{display:block;
            font-size:16px;
            max-width:100%;
            width:564px;
            padding:2px;
            border:none;
            border-bottom:1px solid black;
            margin-bottom:20px;
            };
        textarea{display:block;
            font-size:16px;
            resize: none;
            width:564px;
            max-width:100%;
            height:300px;
            padding:2px;
            border:1px solid black;
            margin-bottom:5px;
            };
        .button{
            width:50px;
            height:auto;
            border:none;
            margin-left:auto;
	        };
    }
 `
 export{CForm};