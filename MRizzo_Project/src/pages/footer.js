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
    <>
      <div className="social-media">
        <a
          href="https://open.spotify.com/artist/4MzKbulWnDVjGnMDMz1g8j?si=Cw7D7ZOHT82IxqUa79OBLQ"
          target="_blank"
          rel="noreferrer"
        >
          <BsSpotify />
        </a>
        <a
          href="https://www.youtube.com/c/MarcRizzoOfficial/about"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
        <a
          href="https://music.apple.com/us/artist/marc-rizzo/80030449"
          target="_blank"
          rel="noreferrer"
        >
          <BsApple />
        </a>
        <a
          href="https://deezer.page.link/LLoZB1W3Cucuj6128"
          target="_blank"
          rel="noreferrer"
        >
          <FaDeezer />
        </a>
        <a
          href="https://www.facebook.com/marcrizzoband/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/marcrizzo_ripandshred/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>

        <a
          href="https://twitter.com/rizzomarc"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div className="developed-by">
        Marc Rizzo 2021 | Developed by{" "}
        <a href="https://github.com/Namonaki0" target="_blank" rel="noreferrer">
          Namonaki0
        </a>
      </div>
    </>
  )
}
