import styled from 'styled-components';

const About=styled.div `
display:grid;
grid-template-columns:repeat(12,8.333vw);
grid-auto-rows:minmax(1vw,auto);
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
@media only screen and (min-width:900px) {
    .portrait{
    grid-column:2/6;
    grid-row:1/3;
    }
.head{
    grid-column:7/12;
    grid-row:1/2;
};
.about{
    grid-column:7/12;
    grid-row:2/3;
};
.offer{
    grid-column:2/12;
    grid-row:3/4;
};
.quote{
    grid-column:2/12;
    grid-row:4/5;
    font-style:italic;
};
    
}
`
export{About}