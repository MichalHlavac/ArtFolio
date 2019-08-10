import path from 'path'
import articles from './src/data/articles'
import articlesEn from './src/data/articlesEn'

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
        path:'/en/contact',
        template: 'src/pages/contact',
      },
      {
        path: '/en/about-me',
        template: 'src/pages/about-me'
      },
    ],
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
