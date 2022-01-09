// const socketIo = require("socket.io")
// const io = socketIo()

export default function twitterFeed() {
  let socket

  socket.on("tweet", tweet => {
    console.log(tweet)
  })
}

// function setup() {
//   var socket
//   socket = io.on("tweet", () => {
//       console.log(tweet)
//   })
// }
