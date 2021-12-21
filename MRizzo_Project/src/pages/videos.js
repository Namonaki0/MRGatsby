import React from "react"
import Layout from "../components/layout"

export default function Videos() {
  return (
    <Layout>
      <div className="videos-wrapper">
        <h1>VIDEOS</h1>

        <div className="main-video">
          <div className="videos">
            <iframe
              width="50%"
              height="315"
              src="https://www.youtube.com/embed/ECsDpg-OK3U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* <div className="video-library-streaming">
          <div className="videos-playlist">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}

        <div className="video-library-other">
          <div>
            <a href="/watch?v=FvuUm89JtLc&list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_&index=3&t=1s"></a>
            1
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>
            <a href="/watch?v=FvuUm89JtLc&list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_&index=3&t=1s"></a>
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
