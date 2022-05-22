import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { useEffect } from "react"
import Seo from "../components/seo"
import {
  BsSpotify,
  BsYoutube,
  BsApple,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsArrowRightShort,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  // BsArrowLeftCircle,
  // BsArrowRightCircle,
} from "react-icons/bs"
import { FaDeezer } from "react-icons/fa"
import { IoTicket } from "react-icons/io5"
import Layout from "../components/layout"
import { useState } from "react"
import {
  mainTitle,
  followSpan,
  bioDescription,
  // bioSpan,
  bioSocial,
  upcomingShowsImg,
  FadeInWhenVisible,
} from "../components/FramerMotion"
import { motion } from "framer-motion"
import { BIT_API, API_KEY, IN_ID } from "../../static/keys"

function IndexPage() {
  const [displayBio, setDisplayBio] = useState(false)
  const [displayBioEffect, setDisplayBioEffect] = useState(false)
  const [bandName, setBandName] = useState([])
  const [liveEvents, setLiveEvents] = useState([])
  const [upcomingShowsSectionHeight, setUpcomingShowsSectionHeight] =
    useState("510px")
  const [upcomingShowsDownArrow, setUpcomingShowsDownArrow] = useState("")
  const [upcomingShowsUpArrow, setUpcomingShowsUpArrow] = useState("none")
  // const [newState, setNewState] = useState(null)

  useEffect(() => {
    ;(async () => {
      const band_name = await fetch(
        `${BIT_API}id_${IN_ID}/?app_id=${API_KEY}`
      ).then(res => res.json())

      const live_events = await fetch(
        `${BIT_API}id_${IN_ID}/events/?app_id=${API_KEY}`
      ).then(res => res.json())

      setBandName(band_name)
      setLiveEvents(live_events)
    })()
  }, [])

  return (
    <>
      <Layout>
        <Seo title="Home" />
        <div className="bio">
          <div className="title-bio">
            <motion.h1 variants={mainTitle} initial="hidden" animate="show">
              Marc Rizzo
            </motion.h1>

            <motion.p
              variants={bioDescription}
              initial="hidden"
              animate="show"
              className="bio-description-wide-screen"
            >
              American guitarist Marc Rizzo is best known for his presence in
              metal band Soulfly where he spent 18 years of his life and Ill
              Nino where he first gained mainstream attention. He is also part
              of solo projects Acoustic Vendetta and Revenge Beast.
              <motion.span
                variants={followSpan}
                initial="hidden"
                animate="show"
                className="follow-marc"
              >
                follow Marc on social media{" "}
                <BsArrowRightShort className="social-media-arrow" />
              </motion.span>
            </motion.p>
          </div>

          <motion.div
            className="bio-description-wrapper"
            onClick={() => {
              setDisplayBio(!displayBio)
              setDisplayBioEffect(!displayBioEffect)
            }}
            variants={bioDescription}
            initial="hidden"
            animate="show"
          >
            <span
              className="about-mark-span"
              style={{
                display: displayBio ? "none" : "block",
              }}
            >
              about marc
            </span>
            <p
              data-bio-effect={displayBioEffect}
              className="bio-description-text"
            >
              American guitarist Marc Rizzo is best known for his presence in
              metal band Soulfly where he spent 18 years of his life and Ill
              Nino where he first gained mainstream attention. He is also part
              of solo projects Acoustic Vendetta and Revenge Beast.
              <span className="bio-description-close-span">close</span>
            </p>
          </motion.div>
          <div className="bio-separator"></div>
          <motion.div
            className="bio-social-media"
            variants={bioSocial}
            initial="hidden"
            animate="show"
          >
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
          </motion.div>
        </div>
        <FadeInWhenVisible>
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
                src="https://open.spotify.com/embed?uri=spotify%3Aalbum%3A22zzEMT2SZ0cZgKFAcfiJU"
                width="95%"
                height="80"
                frameBorder="0"
                allowFullScreen=""
                title="Rotation"
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
        </FadeInWhenVisible>
        <StaticQuery
          query={graphql`
            query TwitterStream {
              allTwitterStatusesUserTimelineGetTweets(limit: 6) {
                edges {
                  node {
                    created_at
                    full_text
                    user {
                      name
                      profile_image_url_https
                      screen_name
                    }
                    entities {
                      media {
                        url
                      }
                      hashtags {
                        text
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => (
            <div
              className="tweets-outer-wrapper"
              onLoad={() => console.log(data)}
            >
              <h2>SOCIAL</h2>
              <FadeInWhenVisible>
                <div className="tweets-wrapper">
                  {data.allTwitterStatusesUserTimelineGetTweets.edges.map(
                    (item, i) => (
                      <div className="individual-tweet">
                        <div className="avatar-name-wrapper">
                          <img
                            alt="Mark's twitter profile avatar"
                            src={item.node.user.profile_image_url_https}
                            id={i}
                          ></img>
                          <div className="name-handle-wrapper">
                            <h3 id={i}>{item.node.user.name}</h3>
                            <span>@{item.node.user.screen_name}</span>
                          </div>
                        </div>
                        <div id={i} className="full-text">
                          {item.node.full_text.replace("&amp;", " & ")}
                          {/* <a
                            href={item.node.entities.media.url}
                            target="_blank"
                            className="tweet-hashtag"
                          >
            
                          </a> */}
                        </div>
                        <span className="tweet-creation-span">
                          posted:{" "}
                          {item.node.created_at.slice(8, 10) === 31
                            ? `${item.node.created_at.slice(4, 10)}st`
                            : item.node.created_at.slice(8, 10) === 21
                            ? `${item.node.created_at.slice(4, 10)}st`
                            : item.node.created_at.slice(8, 10) === 1
                            ? `${item.node.created_at.slice(4, 10)}st`
                            : item.node.created_at.slice(8, 10) === 22
                            ? `${item.node.created_at.slice(4, 10)}nd`
                            : item.node.created_at.slice(8, 10) === 2
                            ? `${item.node.created_at.slice(4, 10)}nd`
                            : `${item.node.created_at.slice(4, 10)}th`}
                        </span>
                      </div>
                    )
                  )}
                  {/* <div className="tweets-navigation-outer-wrapper">
                    <div className="tweets-navigation-buttons">
                      <BsArrowLeftCircle
                        className="left-arrow"
                        onClick={() => {
                          moveTitleToLeft()
                          console.log(newState)
                        }}
                      />
                      <BsArrowRightCircle
                        className="right-arrow"
                        onClick={() => {
                          moveTitleToRight()
                          console.log(newState)
                        }}
                      />
                    </div>
                  </div> */}
                </div>
              </FadeInWhenVisible>
            </div>
          )}
        />

        <div className="upcoming-shows">
          <h2>upcoming shows</h2>
          <span className="band-name-span">{bandName.name}</span>
          <div className="band-background-info-wrapper">
            <div
              className="band-background-image"
              variants={upcomingShowsImg}
              initial="hidden"
              animate="show"
            ></div>
            <div
              className="upcoming-shows-wrapper"
              style={{ height: upcomingShowsSectionHeight }}
            >
              {liveEvents.map(liveEvent => (
                <FadeInWhenVisible>
                  <div className="upcoming-show">
                    <div className="upcoming-show-info">
                      <p className="live-event-date">
                        {liveEvent.starts_at.slice(0, 10)}
                      </p>
                      <p className="live-event-title">{liveEvent.venue.name}</p>
                      <p className="live-event-city">{liveEvent.venue.city}</p>
                      <p className="live-event-country">
                        {liveEvent.venue.country}
                      </p>
                    </div>
                    <a
                      href={liveEvent.url}
                      target="_blank"
                      rel="noreferrer"
                      className="tickets-cta"
                    >
                      <IoTicket className="ticket-icon" />
                      tickets
                    </a>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
          <span className="upcoming-shows-section-expand-wrapper">
            <BsFillArrowDownCircleFill
              className="upcoming-shows-section-expand-down-arrow"
              display={upcomingShowsDownArrow}
              onClick={() => {
                setUpcomingShowsSectionHeight("auto")
                setUpcomingShowsDownArrow("none")
                setUpcomingShowsUpArrow("")
              }}
            />
            <BsFillArrowUpCircleFill
              className="upcoming-shows-section-expand-up-arrow"
              display={upcomingShowsUpArrow}
              onClick={() => {
                setUpcomingShowsSectionHeight("510px")
                setUpcomingShowsUpArrow("none")
                setUpcomingShowsDownArrow("")
              }}
            />
          </span>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
