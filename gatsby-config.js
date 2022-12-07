/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Tabletop Blog',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: ['gatsby-plugin-image', 'gatsby-transformer-remark', 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: `${__dirname}/content/`,
    },
    __key: 'images',
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  }],
};
