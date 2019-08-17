import React from 'react';
import {withRouteData} from 'react-static';
import PortNav from 'components/PortNav';

export default withRouteData( ({articlesEn}) =>(
    <div lang="en">
        <h1>Portfolio</h1>
        <PortNav articles= {articlesEn} lang='en/'/>
    </div>
))