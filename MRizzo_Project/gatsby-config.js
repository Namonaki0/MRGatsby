const config = require("dotenv").config()
const consumer_key = process.env.CONSUMER_KEY
const consumer_secret = process.env.CONSUMER_SECRET
const bearer_token = process.env.BEARER_TOKEN

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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: consumer_key,
          consumer_secret: consumer_secret,
          bearer_token: bearer_token,
        },
        queries: {
          getPosts: {
            endpoint: "tweets",
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
