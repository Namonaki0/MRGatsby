import React from "react"
import {
  BsSpotify,
  BsYoutube,
  BsApple,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs"
import { FaDeezer } from "react-icons/fa"

export default function Footer() {
  return (
    <div class="social-media">
      <a
        href="https://open.spotify.com/artist/4MzKbulWnDVjGnMDMz1g8j?si=Cw7D7ZOHT82IxqUa79OBLQ"
        target="_blank"
      >
        <BsSpotify />
      </a>
      <a
        href="https://www.youtube.com/c/MarcRizzoOfficial/about"
        target="_blank"
      >
        <BsYoutube />
      </a>
      <a
        href="https://music.apple.com/us/artist/marc-rizzo/80030449"
        target="_blank"
      >
        <BsApple />
      </a>
      <a href="https://deezer.page.link/LLoZB1W3Cucuj6128" target="_blank">
        <FaDeezer />
      </a>
      <a href="https://www.facebook.com/marcrizzoband/" target="_blank">
        <BsFacebook />
      </a>
      <a
        href="https://www.instagram.com/marcrizzo_ripandshred/"
        target="_blank"
      >
        <BsInstagram />
      </a>

      <a href="https://twitter.com/rizzomarc" target="_blank">
        <BsTwitter />
      </a>
    </div>
  )
}
