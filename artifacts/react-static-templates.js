

import React from 'react'
import universal, { setHasBabelPlugin } from 'C:/Users/lahva/Desktop/ArtFolio/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/404.js'), universalOptions)
      t_0.template = '../src/pages/404.js'
      
const t_1 = universal(import('../src/pages/about-me.js'), universalOptions)
      t_1.template = '../src/pages/about-me.js'
      
const t_2 = universal(import('../src/pages/contact.js'), universalOptions)
      t_2.template = '../src/pages/contact.js'
      
const t_3 = universal(import('../src/pages/en.js'), universalOptions)
      t_3.template = '../src/pages/en.js'
      
const t_4 = universal(import('../src/pages/index.js'), universalOptions)
      t_4.template = '../src/pages/index.js'
      
const t_5 = universal(import('../src/pages/o-me.js'), universalOptions)
      t_5.template = '../src/pages/o-me.js'
      
const t_6 = universal(import('../src/containers/Article'), universalOptions)
      t_6.template = '../src/containers/Article'
      
const t_7 = universal(import('../src/containers/ArticleEn'), universalOptions)
      t_7.template = '../src/containers/ArticleEn'
      
const t_8 = universal(import('../src/pages/about-me'), universalOptions)
      t_8.template = '../src/pages/about-me'
      

// Template Map
export default {
  '../src/pages/404.js': t_0,
'../src/pages/about-me.js': t_1,
'../src/pages/contact.js': t_2,
'../src/pages/en.js': t_3,
'../src/pages/index.js': t_4,
'../src/pages/o-me.js': t_5,
'../src/containers/Article': t_6,
'../src/containers/ArticleEn': t_7,
'../src/pages/about-me': t_8
}
// Not Found Template
export const notFoundTemplate = "../src/pages/404.js"

