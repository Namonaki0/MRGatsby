module.exports = {
  siteMetadata: {
    title: `Marc Rizzo Project`,
    description: `Marc Rizzo alternative project`,
    author: `Andre Ferreira @Namonaki0`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

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
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Marc-Rizzo-Logo-PLAIN.png`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          bearer_token:
            "AAAAAAAAAAAAAAAAAAAAANSiXgEAAAAAtPk2I3S2ACgsPt5y8tizad22S1c%3DwCvImhMAa3jRJo9HOhobTLV13FdaSdx8siZ4VKsQlWrLGwLrFR",
        },
        queries: {
          getTweets: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "RizzoMarc",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}
