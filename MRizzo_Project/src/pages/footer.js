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
    <footer>
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

      <div className="lower-footer">
        <div className="affiliates-wrapper">
          <h3>Affiliates</h3>
          <div className="affiliate-links">
            <a href="https://www.illnino1.com" target="_blank" rel="noreferrer">
              Ill Niño
            </a>
            <a
              href="https://www.storefrontier.com/marcrizzo"
              target="_blank"
              rel="noreferrer"
            >
              Store Frontier
            </a>
            <a
              href="https://www.bandsintown.com/a/1091590-marc-rizzo-band"
              target="_blank"
              rel="noreferrer"
            >
              BandsInTown
            </a>
            <a
              href="https://www.youtube.com/c/MarcRizzoOfficial/videos"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </div>
        </div>
        <div className="developed-by">
          <p>Marc Rizzo 2022 </p>
          <div>
            Developed by
            <a
              href="https://github.com/Namonaki0"
              target="_blank"
              rel="noreferrer"
            >
              Namonaki0
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
