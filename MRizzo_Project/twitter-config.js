// require("dotenv").config()
// const http = require("http")
// const express = require("express")
// const path = require("path")
// const socketIo = require("socket.io")
// const needle = require("needle")
// const TWITTER_BEARER_TOKEN = process.env.BEARER_TOKEN
// const PORT = process.env.PORT || 8000

// const app = express()

// const server = http.createServer(app)
// const io = socketIo(server)

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../", "src/pages", "index.js"))
//   console.log("working")
// })

// const twitterRulesURL = "https://api.twitter.com/2/tweets/search/stream/rules"
// const twitterStreamURL =
//   "https://api.twitter.com/2/tweets/search/stream?tweet.fields=public_metrics&expansions=166445813"
// const timeline = "https://api.twitter.com/2/users/166445813/tweets"

// const rules = [{ value: "marc rizzo", id: 166445813 }]

// async function getRules() {
//   const data = {
//     value: rules,
//   }
//   const response = await needle("get", twitterRulesURL, data, {
//     headers: {
//       Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
//     },
//   })
//   console.log(response.body)
//   return response.body
// }

// // async function setRules() {
// //   const data = {
// //     add: rules,
// //     value: "marc rizzo",
// //     id: "166445813",
// //   }
// //   const response = await needle("post", twitterRulesURL, data, {
// //     headers: {
// //       "content-type": "application/json",
// //       Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
// //     },
// //   })
// //   console.log(response.body)
// //   return response.body
// // }

// function tweetStream(socket) {
//   const stream = needle.get(timeline, {
//     headers: {
//       Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
//     },
//   })
//   stream.on("data", data => {
//     try {
//       // const json = JSON.parse(data)
//       // socketIo.emit("tweet", data)
//       // let io
//       // io.on("tweet", data => {
//       //   console.log(data)
//       // })

//       console.log(data)
//     } catch (error) {
//       console.log(error)
//     }
//   })
//   return stream
// }

// io.on("connection", async () => {
//   console.log("connected")
//   let currentRules

//   try {
//     // await setRules()

//     currentRules = await getRules()
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
//   tweetStream(io)
// })
// ;(async () => {
//   console.log("connected")
//   let currentRules

//   try {
//     // await setRules()

//     currentRules = await getRules()
//   } catch (error) {
//     console.log(error)
//     process.exit(1)
//   }
//   tweetStream(io)
// })()

// server.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`))
