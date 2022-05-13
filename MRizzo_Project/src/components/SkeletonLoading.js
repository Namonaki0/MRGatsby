import React from "react"
import skeleton from "./skeleton.css"

const SkeletonLoading = ({ type }) => {
  const classes = `skeleton ${type}`
  return (
    <>
      <div className={classes}>
        <div className="video-thumbnail"></div>
        <div className="video-footer"></div>
      </div>
    </>
  )
}

export default SkeletonLoading
