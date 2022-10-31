const config = require('@deadline/common/data/config');

module.exports = {
  siteMetadata: {
    site_url: config.url,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `../common/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
    },
    {
      resolve: `gatsby-plugin-image`,
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Roboto:300,400,500,400i,700',
            'DM Sans:400,400i,500,500i,700,700i',
            'Frank Ruhl Libre:300,400,500,700',
            'Comfortaa:300,400,500,600,700',
            'Montserrat:700',
            'Cairo',
            'Lato',
            'Playfair Display',
            'Anton',
            'Abril Fatface',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby',
        short_name: 'Gatsby',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: '../common/static/favicon/favicon.png',
      },
    },
  ],
};
