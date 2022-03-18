import React from "react"
import Layout from "../components/layout"
import { useState, useEffect } from "react"

export default function Videos() {
  const baseUrl =
    " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D"

  const [videos, setVideos] = useState([])
  const [currentChannelId, setCurrentChannelId] = useState(
    "UCuvTObpdx__W966kbdIZ4_Q"
  )

  useEffect(() => {
    ;(async () => {
      const data = await fetch(`${baseUrl}${currentChannelId}`).then(res =>
        res.json()
      )

      setVideos(data.items)
      console.log(videos)
    })()
  }, [currentChannelId])

  return (
    <Layout>
      <div className="videos-wrapper">
        <h1>VIDEOS</h1>

        <div className="main-video">
          <div className="main-video-wrapper">
            <iframe
              width="90%"
              height="315"
              src="https://www.youtube.com/embed/ECsDpg-OK3U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <hr />

        <div className="video-library-other">
          <div>
            {/* <a href="/watch?v=FvuUm89JtLc&list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_&index=3&t=1s"></a> */}
            1
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>
            {/* <a href="/watch?v=FvuUm89JtLc&list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_&index=3&t=1s"></a> */}
            6
          </div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
      </div>
    </Layout>
  )
}
