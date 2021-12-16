import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

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
          metal band Soulfly, formerly of ill Nino and on the rise solo projects
          Acoustic Vendetta and Revenge Beast.
        </p>
      </div>
    </div>

    <section className="track-previews">
      <h2>previews</h2>

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
