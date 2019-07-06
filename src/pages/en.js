import React from 'react'
import {withRouteData} from 'react-static'
import PortNav from 'components/PortNav'
import styled from 'styled-components'

const Portfolio=styled.div`

`

export default withRouteData( ({articlesEn}) =>(
    <Portfolio>
        <PortNav articles= {articlesEn} lang='en/'/>
    </Portfolio>
))