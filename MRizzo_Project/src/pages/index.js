import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <Nav className="nav" /> */}
    <div class="bio">
      <div class="img-wrapper">
        <img src="https://metaladdicts.com/wp-content/uploads/2016/06/Marc-Rizzo.jpg" />
      </div>

      <div class="bio-description-wrapper">
        <h2>About Marc</h2>

        <p>
          Marc Rizzo is an American guitarist best known for his presence in
          metal band Soulfly, formerly of ill Nino and on the rise solo projects
          Acoustic Vendetta and Revenge Beast.
        </p>
      </div>
    </div>

    <section class="track-previews">
      <h2>previews</h2>

      <iframe
        src="https://open.spotify.com/embed/album/5z7NkjFyLKFA75yID4nkbH?utm_source=generator"
        width="95%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/album/0NhTzQ1uuR7YUOTsqUP7kR?utm_source=generator"
        width="95%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/album/0ceQJvREwK9rAh3bxytNHw?utm_source=generator"
        width="95%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>

      <iframe
        src="https://open.spotify.com/embed/album/6Iu3IMF17LWMEDGG5Kr8Ax?utm_source=generator"
        width="95%"
        height="80"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </section>

    <div class="upcoming-shows">
      <h2>upcoming shows</h2>
      <div class="img-wrapper">
        <StaticImage
          src="images/Hail_The_Horns_And_Whiskey_Dick.jpeg"
          alt="Hail the Horns and Whiskey Dick banner"
        />
        <StaticImage
          src="images/Winter_Wasteland.jpeg"
          alt="Winter Wasteland banner"
        />
      </div>
    </div>
  </Layout>
)

export default IndexPage
