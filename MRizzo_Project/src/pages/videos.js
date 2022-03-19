import React from "react"
import { useState, useEffect } from "react"

export default function Videos() {
  const baseUrl =
    " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D"

  const [videos, setVideos] = useState([])
  const [currentChannelId, setCurrentChannelId] = useState(
    "UCkNW3tA-mFGnkviFNPzTq5A"
  )

  useEffect(() => {
    ;(async () => {
      const data = await fetch(`${baseUrl}${currentChannelId}`).then(res =>
        res.json()
      )

      setVideos(data.items)
      console.log(data)
    })()
  }, [currentChannelId])

  return (
    <div className="video-library-wrapper">
      <h1>VIDEOS</h1>

      {videos.map(video => (
        <div className="video-library">
          <div key={video.guid} className="individual-video">
            <a href={video.link} target="_blank">
              <img
                alt="video-template"
                src={`https://i4.ytimg.com/vi/${
                  video.guid.split(":")[2]
                }/mqdefault.jpg`}
              />
            </a>
          </div>
          <div className="video-footer">
            <p>{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
