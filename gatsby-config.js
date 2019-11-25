module.exports = {
  siteMetadata: {
    title: `Artfox`,
    description: `Артфокс - студия рисования`,
    author: `@akmid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#61757d`,
        theme_color: `#61757d`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5zizl0d63jp1`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'IQqqR8R_A0vg7tjAOmyBRbeHU6hDJrC5ucuoSmFw-J0',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
