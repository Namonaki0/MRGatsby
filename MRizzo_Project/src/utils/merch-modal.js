import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function MerchModal(openModal, setOpenModal) {
  return (
    <div className="merch-page-modal" style={{ display: null ? "grid" : null }}>
      <span>X</span>
      <StaticImage src="" alt="" />
      <h3>title</h3>
      <p>description</p>
    </div>
  )
}
