require("dotenv").config()
const needle = require("needle")
// const consumer_key = process.env.CONSUMER_KEY
// const consumer_secret = process.env.CONSUMER_SECRET
const bearer_token = process.env.BEARER_TOKEN
// const twitter_end_point = "/2/tweets/1478003786887086084"

const twitterRulesURL = "https://api.twitter.com/2/tweets/search/stream/rules"
const twitterStreamURL =
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=author_id"

// console.log(twitterStreamURL)

const rules = [{ value: "marc rizzo" }]

async function getRules() {
  const data = {
    value: "marc rizzo",
    id: "166445813",
  }
  const response = await needle("get", twitterRulesURL, data, {
    headers: {
      Authorization: `Bearer ${bearer_token}`,
    },
  })

  return response.body
}

// async function setRules() {
//   const data = {
//     add: rules,
//   }
//   const response = await needle("post", twitterRulesURL, data, {
//     headers: {
//       "content-type": "application/json",
//       Authorization: `Bearer ${bearer_token}`,
//     },
//   })
//   console.log(response.body)
//   return response.body
// }

function tweetStream() {
  const stream = needle.get(twitterStreamURL, {
    headers: {
      Authorization: `Bearer ${bearer_token}`,
    },
  })
  stream.on("data", data => {
    try {
      const jsonFormat = JSON.parse(data)
      console.log(jsonFormat)
    } catch (error) {}
  })
}

;(async () => {
  let currentRules

  try {
    // await setRules()
    currentRules = await getRules()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }

  tweetStream()
})()

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
          consumer_key: process.env.CONSUMER_KEY,
          consumer_secret: process.env.CONSUMER_SECRET,
          bearer_token: process.env.BEARER_TOKEN,
        },
        queries: {
          getTweets: {
            endpoint: "/2/tweets",
            params: {
              screen_name: "RizzoMarc",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
        hashtagGatsby: {
          endpoint: "/2/tweets",
          params: {
            q: "#gatsbyjs",
            tweet_mode: "extended",
          },
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
