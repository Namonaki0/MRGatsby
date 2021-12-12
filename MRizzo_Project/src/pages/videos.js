import React from "react"
import Nav from "../components/nav"

export default function Videos() {
  return (
    <div className="videos-wrapper">
      <Nav />

      <h1>VIDEOS</h1>

      <div className="main-video">
        <div className="videos">
          <iframe
            width="95%"
            height="315"
            src="https://www.youtube.com/embed/ECsDpg-OK3U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="video-library-streaming">
        <div className="videos-playlist">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="video-library-other">
        <p>content</p>
      </div>
    </div>
  )
}
