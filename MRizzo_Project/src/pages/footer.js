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
          aria-label="marc rizzo spotify page link"
        >
          <BsSpotify />
        </a>
        <a
          href="https://www.youtube.com/c/MarcRizzoOfficial/about"
          target="_blank"
          rel="noreferrer"
          aria-label="marc rizzo youtube page link"
        >
          <BsYoutube />
        </a>
        <a
          href="https://music.apple.com/us/artist/marc-rizzo/80030449"
          target="_blank"
          rel="noreferrer"
          aria-label="marc rizzo apple music page link"
        >
          <BsApple />
        </a>
        <a
          href="https://deezer.page.link/LLoZB1W3Cucuj6128"
          target="_blank"
          rel="noreferrer"
          aria-label="marc rizzo deezer page link"
        >
          <FaDeezer />
        </a>
        <a
          href="https://www.facebook.com/marcrizzoband/"
          target="_blank"
          rel="noreferrer"
          aria-label="marc rizzo facebook page link"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.instagram.com/marcrizzo_ripandshred/"
          target="_blank"
          rel="noreferrer"
          aria-label="marc rizzo instagram page link"
        >
          <BsInstagram />
        </a>

        <a
          href="https://twitter.com/rizzomarc"
          target="_blank"
          rel="noreferrer"
          aria-label="marc rizzo twitter page link"
        >
          <BsTwitter />
        </a>
      </div>

      <div className="lower-footer">
        <div className="lower-footer-wrapper">
          <div className="footer-affiliate-links">
            <h3>Affiliates</h3>
            <a
              href="https://www.illnino1.com"
              target="_blank"
              rel="noreferrer"
              aria-label="ill nino official website link"
            >
              Ill Niño
            </a>
            <a
              href="https://www.storefrontier.com/marcrizzo"
              target="_blank"
              rel="noreferrer"
              aria-label="marc rizzo store frontier page link"
            >
              Store Frontier
            </a>
            <a
              href="https://www.bandsintown.com/a/1091590-marc-rizzo-band"
              target="_blank"
              rel="noreferrer"
              aria-label="marc rizzo bands in town page link"
            >
              BandsInTown
            </a>
            <a
              href="https://www.youtube.com/c/MarcRizzoOfficial/videos"
              target="_blank"
              rel="noreferrer"
              aria-label="marc rizzo youtube page link"
            >
              YouTube
            </a>
          </div>
          <div className="footer-side-projects">
            <h3>side projects</h3>
            <a
              href="https://open.spotify.com/album/7AqY8h16yb0C2XFI119pGx"
              target="_blank"
              rel="noreferrer"
              aria-label="revenge beast side project link"
            >
              Revenge Beast
            </a>
            <a
              href="https://www.facebook.com/AcousticVendetta/"
              target="_blank"
              rel="noreferrer"
              aria-label="acoustic vendetta side project link"
            >
              Acoustic Vendetta
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
