import * as React from "react"
import { StaticQuery, graphql } from "gatsby"
import Seo from "../components/seo"
import {
  BsSpotify,
  BsYoutube,
  BsApple,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs"
import { FaDeezer } from "react-icons/fa"
import Layout from "../components/layout"
import image from "../../public/static/images/layered-waves-haikei (6).svg"
// import { url } from "inspector"

const IndexPage = () => (
  <>
    <Layout>
      <Seo title="Home" />

      <div className="bio">
        <div className="img-wrapper">
          <h1>Marc Rizzo</h1>
          <img
            alt=""
            src="https://metaladdicts.com/wp-content/uploads/2016/06/Marc-Rizzo.jpg"
          />
        </div>

        <div className="bio-description-wrapper">
          <p>
            American guitarist Marc Rizzo is best known for his presence in
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

      <div className="track-previews-wrapper">
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
        <div className="wave-image wave-svg"></div>
      </div>
      {/* 
      <div className="upcoming-shows">
        <h2>upcoming shows</h2>

        <img
          src="/images/Hail_The_Horns_And_Whiskey_Dick.jpeg"
          alt="Hail the Horns and Whiskey Dick banner"
        />
        <img
          src="/images/Winter_Wasteland.jpeg"
          alt="Winter Wasteland banner"
        />
      </div> */}

      <StaticQuery
        query={graphql`
          query TwitterStream {
            allTwitterStatusesUserTimelineGetTweets(limit: 6) {
              edges {
                node {
                  full_text
                  created_at
                  user {
                    name
                    profile_image_url
                    screen_name
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="tweets-wrapper">
            <h2>social:</h2>
            {data.allTwitterStatusesUserTimelineGetTweets.edges.map(
              (item, i) => (
                <div className="individual-tweet">
                  <div className="avatar-name-wrapper">
                    <img
                      alt="Mark's twitter profile avatar"
                      src={item.node.user.profile_image_url}
                      id={i}
                    ></img>
                    <div className="name-handle-wrapper">
                      <h3 id={i}>{item.node.user.name}</h3>
                      <span>@{item.node.user.screen_name}</span>
                    </div>
                  </div>
                  <div id={i} className="full-text">
                    {item.node.full_text}
                  </div>
                </div>
              )
            )}
          </div>
        )}
      />
    </Layout>
  </>
)

export default IndexPage
