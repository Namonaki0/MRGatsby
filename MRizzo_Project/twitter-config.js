require("dotenv").config()
const needle = require("needle")
// const consumer_key = process.env.CONSUMER_KEY
// const consumer_secret = process.env.CONSUMER_SECRET
const bearer_token = process.env.BEARER_TOKEN
// const twitter_end_point = "/2/tweets/1478003786887086084"

const twitterRulesURL = "https://api.twitter.com/2/tweets/search/stream/rules"
const twitterStreamURL =
  "https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=166445813"
const timeline = "https://api.twitter.com/2/users/166445813/tweets"
// console.log(twitterStreamURL)

const rules = [{ value: "marc rizzo" }]

async function getRules() {
  const response = await needle("get", twitterRulesURL, {
    headers: {
      Authorization: `Bearer ${bearer_token}`,
    },
  })
  console.log(response.body)
  return response.body
}

async function setRules() {
  const data = {
    add: rules,
    value: "marc rizzo",
    id: "166445813",
  }
  const response = await needle("post", twitterRulesURL, data, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${bearer_token}`,
    },
  })
  console.log(response.body)
  return response.body
}

function tweetStream() {
  const stream = needle.get(timeline, {
    headers: {
      Authorization: `Bearer ${bearer_token}`,
    },
  })
  stream.on("data", data => {
    try {
      //   const jsonFormat = JSON.parse(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  })
  return stream
}

;(async () => {
  let currentRules

  try {
    await setRules()

    currentRules = await getRules()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
  tweetStream()
})()
