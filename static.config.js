import React from "react";
import path from "path";
import articles from "./src/data/articles";

export default {
  getRoutes: async () => [
    {
      path: "/",
      getData: () => ({
        articles,
      }),
      children: articles.map((article) => ({
        path: `/portfolio/${article.name.replace(".", "_").toLowerCase()}`,
        template: "src/containers/Article",
        getData: () => ({ article, articles }),
      })),
    },
    {
      path: "/kontakt",
      template: "src/pages/kontakt",
    },
    {
      path: "/bio",
      template: "src/pages/bio",
    },
    {
      path: "/en",
      getData: () => ({
        articles,
      }),
      children: articles.map((article) => ({
        path: `/portfolio/${article.nameEn.toLowerCase()}`,
        template: "src/containers/Article",
        getData: () => ({
          article,
          articles,
        }),
      })),
    },
    {
      path: "/en/contact",
      template: "src/pages/contact",
    },
    {
      path: "/en/bio",
      template: "src/pages/enBio",
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
        <meta charSet="UTF-8" />
        <title>Martina Fischmeister</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Mohu pro Vás ilustrovat knihy, články, weby, plakáty,
             zpracovat svatební oznámení, návrh na tetování nebo vyhotovit portrét. Projektům se meze nekladou!"
        />
        <meta name="author" content="Michal Hlaváč" />
        <meta name="keywords" content="" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/favicon-logo-16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicon-logo-32.png"
        />
        <meta property="og:title" content="Martina Fischmeister" />
        <meta
          property="og:description"
          content="Mohu pro Vás ilustrovat knihy, články, weby, plakáty,
             zpracovat svatební oznámení, návrh na tetování nebo vyhotovit portrét. Projektům se meze nekladou!"
        />
        <meta
          property="og:image"
          content="https://martina-fischmeisterr.netlify.com/IMG/personal_work/personal_work.jpg"
        />
        <meta
          property="og:url"
          content="https://martina-fischmeisterr.netlify.com/"
        />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    require.resolve("react-static-plugin-styled-components"),
  ],
};
