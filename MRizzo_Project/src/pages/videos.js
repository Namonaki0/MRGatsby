import React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Modal from "../components/Modal"

export default function Videos() {
  const baseUrl =
    " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D"
  const playlistFeed =
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fyoutube.com%2Ffeeds%2Fvideos.xml%3Fplaylist_id%3D"

  const [videos, setVideos] = useState([])
  const [feedVideos, setFeedVideos] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [currentVideo, setCurrentvideo] = useState(null)
  const [currentChannelId, setCurrentChannelId] = useState(
    "UCkNW3tA-mFGnkviFNPzTq5A"
  )
  const [livestreamPlaylist, setLivestreamPlaylist] = useState(
    "PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_"
  )

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
        <h1>VIDEOS</h1>
        <div className="videos-section-block">
          <h2>Latest</h2>
          {videos.map(video => (
            <div key={video.guid} className="library-video">
              <a
                data-link-cta={video.link}
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
                    video.guid.split(":")[2]
                  }/mqdefault.jpg`}
                />
              </a>
              <div className="video-footer">
                <p>{video.title}</p>
              </div>
            </div>
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
        <div className="videos-section-block">
          <h2>Livestreams</h2>
          {feedVideos.map(feedVideo => (
            <div key={feedVideo.guid} className="library-video">
              <a
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
                <p>{feedVideo.title}</p>
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
        <div className="video-modal-inner-wrapper">
          <div className="video-name-wrapper">
            <iframe src={currentVideo}></iframe>
          </div>
        </div>
      </Modal>
    </Layout>
  )
}
