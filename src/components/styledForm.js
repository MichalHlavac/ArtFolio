import styled from 'styled-components';

const CForm=styled.div `
    grid-column:2/12;
    grid-row:3/4;
    .thanks{}
    .Form{
        input{display:block;
            width:100px;};
        textarea{display:block;
            resize: none;
            width:100px;
            };
        button{display:block;};
    }
 `
 export{CForm};