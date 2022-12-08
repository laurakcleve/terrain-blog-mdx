/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Tabletop Blog',
    siteUrl: 'https://www.yourdomain.tld',
  },
  plugins: ['gatsby-plugin-image', {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 800,
          },
        },
      ],
    },
  }, 'gatsby-plugin-sharp', 'gatsby-transformer-sharp', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'content',
      path: `${__dirname}/content/`,
    },
    __key: 'content',
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: './src/pages/',
    },
    __key: 'pages',
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: './src/images/',
    },
    __key: 'images',
  }, {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /src\/images\/.*\.svg/,
      },
    },
  }],
};
