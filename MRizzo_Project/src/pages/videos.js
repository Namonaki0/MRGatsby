import React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import { motion } from "framer-motion"
import { container } from "../components/FramerMotion"
import Modal from "../components/Modal"
import {
  BASE_URL,
  PLAYLIST_FIELD,
  CHANNEL_ID,
  LIVESTREAM_PLAYLIST,
} from "../../static/keys"

export default function Videos() {
  const baseUrl = BASE_URL
  const playlistFeed = PLAYLIST_FIELD

  const [videos, setVideos] = useState([])
  const [feedVideos, setFeedVideos] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [currentVideo, setCurrentvideo] = useState(null)
  const [currentChannelId, setCurrentChannelId] = useState(CHANNEL_ID)
  const [livestreamPlaylist, setLivestreamPlaylist] =
    useState(LIVESTREAM_PLAYLIST)

  useEffect(() => {
    ;(async () => {
      const data = await fetch(`${baseUrl}${currentChannelId}`).then(res =>
        res.json()
      )
      const livestream = await fetch(
        `${playlistFeed}${livestreamPlaylist}`
      ).then(res => res.json())

      setVideos(data.items)
      setFeedVideos(livestream.items)
    })()
  }, [currentChannelId, livestreamPlaylist])

  return (
    <Layout>
      <div className="video-library-wrapper">
        <h2>Latest</h2>
        <div className="videos-section-block">
          {videos &&
            videos.map(video => (
              <motion.div
                className="library-video"
                variants={container}
                initial="hidden"
                animate="show"
                key={video.guid}
              >
                <a
                  className="video-data-link"
                  data-link-cta={video.link}
                  onClick={e => {
                    setOpenModal(true)
                    setCurrentvideo(
                      e.target.dataset.linkCta.replace("watch?v=", "embed/")
                    )
                  }}
                >
                  <img
                    className="video-template"
                    alt="video-template"
                    src={`https://i4.ytimg.com/vi/${
                      video.guid.split(":")[2]
                    }/mqdefault.jpg`}
                  />
                </a>
                <div className="video-footer">
                  <p>{video.title.replace("&amp;", " & ").toUpperCase()}</p>
                </div>
              </motion.div>
            ))}
          <a
            href="https://www.youtube.com/c/MarcRizzoOfficial/videos"
            alt="more videos"
            className="more-videos-cta"
            target="_blank"
            rel="noreferrer"
          >
            more videos
          </a>
        </div>
        <h2>Livestreams</h2>
        <div className="videos-section-block">
          {feedVideos &&
            feedVideos.map(feedVideo => (
              <div key={feedVideo.guid} className="library-video">
                <a
                  className="video-data-link"
                  data-link-cta={feedVideo.link}
                  onClick={e => {
                    setOpenModal(true)
                    setCurrentvideo(
                      e.target.dataset.linkCta.replace("watch?v=", "embed/")
                    )
                  }}
                >
                  <img
                    alt="video-template"
                    src={`https://i4.ytimg.com/vi/${
                      feedVideo.guid.split(":")[2]
                    }/mqdefault.jpg`}
                  />
                </a>
                <div className="video-footer">
                  <p>{feedVideo.title.replace("&amp;", "&").toUpperCase()}</p>
                </div>
              </div>
            ))}
          <a
            href="https://www.youtube.com/playlist?list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_"
            alt="more videos"
            className="more-videos-cta"
            target="_blank"
            rel="noreferrer"
          >
            more videos
          </a>
        </div>
      </div>
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="modal-inner-wrapper">
          <div className="video-player-wrapper">
            <iframe src={`${currentVideo}?autoplay=1`}></iframe>
          </div>
        </div>
      </Modal>
    </Layout>
  )
}
