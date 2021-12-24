import * as React from "react"
import {
  BsSpotify,
  BsYoutube,
  BsApple,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs"
import { FaDeezer } from "react-icons/fa"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const tweet = () => {
  return `
    <blockquote class="twitter-tweet" data-dnt="true" data-theme="dark">
        <p lang="en" dir="ltr">
          <a href="https://twitter.com/hashtag/CHICAGO?src=hash&amp;ref_src=twsrc%5Etfw">
            #CHICAGO
          </a>{" "}
          TONIGHT!!!{" "}
          <a href="https://twitter.com/hashtag/livemusic?src=hash&amp;ref_src=twsrc%5Etfw">
            #livemusic
          </a>{" "}
          <a href="https://t.co/kAugQnTWZx">pic.twitter.com/kAugQnTWZx</a>
        </p>
        &mdash; Marc Rizzo (@RizzoMarc){" "}
        <a href="https://twitter.com/RizzoMarc/status/1471235277914005508?ref_src=twsrc%5Etfw">
          December 15, 2021
        </a>
      </blockquote>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
      `
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <Nav classNameName="nav" /> */}
    <div className="bio">
      <div className="img-wrapper">
        <img
          alt=""
          src="https://metaladdicts.com/wp-content/uploads/2016/06/Marc-Rizzo.jpg"
        />
      </div>

      <div className="bio-description-wrapper">
        <h2>About Marc</h2>

        <p>
          Marc Rizzo is an American guitarist best known for his presence in
          metal band Soulfly where he spent 18 years of his life and Ill Nino
          where he first gained mainstream attention. He is also part of solo
          projects Acoustic Vendetta and Revenge Beast.
        </p>
      </div>
      <div className="bio-social-media">
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
    </div>

    <h2>previews:</h2>
    <section className="track-previews">
      <iframe
        src="https://open.spotify.com/embed/album/5z7NkjFyLKFA75yID4nkbH?utm_source=generator"
        width="95%"
        height="80"
        frameBorder="0"
        allowFullScreen=""
        title="Living Shred Vol.1"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/album/0NhTzQ1uuR7YUOTsqUP7kR?utm_source=generator"
        width="95%"
        height="80"
        frameBorder="0"
        allowFullScreen=""
        title="Legionnaire"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/album/0ceQJvREwK9rAh3bxytNHw?utm_source=generator"
        width="95%"
        height="80"
        frameBorder="0"
        allowFullScreen=""
        title="The Ultimate Devotion"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/album/6Iu3IMF17LWMEDGG5Kr8Ax?utm_source=generator"
        width="95%"
        height="80"
        frameBorder="0"
        allowFullScreen=""
        title="Colossal Myopia"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </section>

    <div className="upcoming-shows">
      <h2>upcoming shows</h2>

      <div>{tweet}</div>

      <div className="img-wrapper">
        <div className="placeholder">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </div>
        {/* <img
          src="/images/Hail_The_Horns_And_Whiskey_Dick.jpeg"
          alt="Hail the Horns and Whiskey Dick banner"
        />
        <img
          src="/images/Winter_Wasteland.jpeg"
          alt="Winter Wasteland banner"
        /> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
