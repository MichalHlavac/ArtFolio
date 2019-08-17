import React from 'react';
import {withRouteData} from 'react-static';
import styled from 'styled-components';

import PortNav from 'components/PortNav';

const Portfolio=styled.div`

`

export default withRouteData( ({articlesEn}) =>(
    <Portfolio lang="en">
        <PortNav articles= {articlesEn} lang='en/'/>
    </Portfolio>
))