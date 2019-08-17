import React from  'react';
import path from 'path';
import articles from './src/data/articles';
import articlesEn from './src/data/articlesEn';

export default {
  getRoutes: async () =>  
     [
      {
        path: '/',
        getData: () => ({
          articles,
        }),
        children: articles.map(article => ({
          path: `/portfolio/${article.id}`,
          template: 'src/containers/Article',
          getData: () => ({article,articles,}),
          
        })),
      },
      {
        path: '/en',
        getData: () => ({
          articlesEn,
        }),
        children: articlesEn.map(article => ({
          path: `/portfolio/${article.id}`,
          template: 'src/containers/ArticleEn',
          getData: () => ({
            article,articlesEn, 
          }),
          
        })),
        
      },
      {
        path: '/en/about-me',
        template: 'src/pages/about-me'
      },
    ],
    Document: ({
      Html,
      Head,
      Body,
      children,
      state: { siteData, renderMeta },
    }) => (
        <Html lang="cs">
          <Head>
            <title>Martina Fischmeister</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Česká ilustrátorka a malířka, žijící v Praze." />
            <meta name="author" content="Michal Hlaváč" />
            <meta name="keywords" content="Martina Fischmeister,ilustration" />
            <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-logo-16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-logo-32.png" />
          </Head>
          <Body>{children}</Body>
        </Html>
      ),
  
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-styled-components'),
  ],
}
