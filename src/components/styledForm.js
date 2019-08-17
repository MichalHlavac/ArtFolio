import styled from 'styled-components';

const CForm=styled.div `
    grid-column:2/12;
    grid-row:3/4;
    .thanks{}
    .Form{
        text-align:center;
        input{display:block;
            width:100%;};
        textarea{display:block;
            resize: none;
            width:100%;
            };
        button{display:block;
        margin:auto 0px};
    }
 `
 export{CForm};