import React from 'react';
import {withRouteData} from 'react-static';
import PortNav from 'components/PortNav';

export default withRouteData (({articles}) => (

  <div>
    <h1>Portfolio</h1>
    <PortNav articles= {articles} lang=''/>
  </div>
));