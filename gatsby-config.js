/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: '1d3Trees',
    author: 'Laura Cleveland',
    description: 'Tabletop DIY',
    siteUrl: 'https://1d3trees.com/',
  },
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
      __key: 'content',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src\/images\/.*\.svg/,
        },
      },
    },
  ],
};
