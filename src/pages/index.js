import React from 'react';
import {withRouteData} from 'react-static';
import styled from 'styled-components';

import PortNav from 'components/PortNav';

const Portfolio=styled.div`
position:relative;
`


export default withRouteData (({articles}) => (

  <Portfolio>
    <PortNav articles= {articles} lang=''/>
  </Portfolio>
));