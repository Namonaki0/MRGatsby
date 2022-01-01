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
// import tweets from "../../public/static/tweets"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import tweet from "../../public/static/tweets"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <Nav classNameName="nav" /> */}
    <div className="bio">
      <div className="img-wrapper">
        <p>Marc Rizzo</p>
        <img
          alt=""
          src="https://metaladdicts.com/wp-content/uploads/2016/06/Marc-Rizzo.jpg"
        />
      </div>

      <div className="bio-description-wrapper">
        {/* <h2>About Marc</h2> */}

        <p>
          American guitarist Marc Rizzo is best known for his presence in metal
          band Soulfly where he spent 18 years of his life and Ill Nino where he
          first gained mainstream attention. He is also part of solo projects
          Acoustic Vendetta and Revenge Beast.
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

      <div className="placeholder">
        <div class="twitter-tweet" data-lang="en" data-theme="dark">
          <p lang="en" dir="ltr">
            I AM - REVENGE BEAST OFFICIAL MUSIC VIDEO{" "}
            <a href="https://t.co/Jvt92AivU8">https://t.co/Jvt92AivU8</a>{" "}
            <a href="https://twitter.com/hashtag/DEATHMETAL?src=hash&amp;ref_src=twsrc%5Etfw">
              #DEATHMETAL
            </a>
          </p>
          &mdash; Marc Rizzo (@RizzoMarc){" "}
          <a href="https://twitter.com/RizzoMarc/status/1475919957057847300?ref_src=twsrc%5Etfw">
            December 28, 2021
          </a>
        </div>{" "}
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
  </Layout>
)

export default IndexPage
