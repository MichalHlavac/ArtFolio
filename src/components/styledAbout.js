import styled from 'styled-components';

const About=styled.div `
display:grid;
grid-template-columns:repeat(12,8.333vw);
grid-auto-rows:minmax(1vw,auto);
h1{font-size:32px;}
h2{font-size:25px;}
p{font-size:16px}
.portrait{
    grid-column:2/12;
    grid-row:1/2;
    width:450px;
    max-width:100%;
    margin:auto;
    }
.head{
    grid-column:2/12;
    grid-row:2/3;
};
.about{
    grid-column:2/12;
    grid-row:3/4;
};
.offer{
    grid-column:2/12;
    grid-row:4/5;
};
.quote{
    grid-column:2/12;
    grid-row:5/6;
    font-style:italic;
};
`
export{About}