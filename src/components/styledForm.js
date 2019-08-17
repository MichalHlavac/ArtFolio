import styled from 'styled-components';

const CForm=styled.div `
    grid-column:2/12;
    grid-row:3/4;
    width:300px;
    max-width:100%;
    .thanks{}
    .Form{
        input{display:block;
            width:100%;
            padding:2px};
        textarea{display:block;
            resize: none;
            width:100%;
            padding:2px;
            };
        button{display:block;
        margin:auto 0px};
    }
 `
 export{CForm};