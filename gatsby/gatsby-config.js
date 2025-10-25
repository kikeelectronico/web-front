/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Enrique Gómez",
    siteUrl: "https://enriquegomez.me"
  },
  plugins: [
    "gatsby-plugin-mdx",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: "./content/blog/",
      },
    },
    "gatsby-transformer-remark",
  ]
};