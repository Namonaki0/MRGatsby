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
          consumer_key: "fLm55H4QFtHVHLzSFGpZlnKxs",
          consumer_secret: "tZMYNZd7Mr9gX5zgbS3Z8gsOt489HQmN5NGr6K48XVi4wswMO4",
          bearer_token:
            "AAAAAAAAAAAAAAAAAAAAANSiXgEAAAAAzeNQRyNLTKgJTpX%2BUT%2F72GkJ96w%3DR9dBH5rqr79c7ko5RJKrPuZGWzHnS0hqyuK9oRMVJgjV5CNr77",
        },
        queries: {
          getPosts: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "RizzoMarc",
              include_rts: false,
              exclude_replies: true,
              // q: "@RizzoMarc",
              tweet_mode: "extended",
            },
          },
        },
      },
    },
  ],
}
