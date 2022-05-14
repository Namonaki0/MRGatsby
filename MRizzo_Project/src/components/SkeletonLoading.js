import React from "react"
import skeleton from "./skeleton.css"

const SkeletonLoading = ({ type }) => {
  const classes = `skeleton ${type}`
  return (
    <div className={classes}>
      <span>LOADING...</span>
      <div className="skeleton video-thumbnail"></div>
      <div className="skeleton video-footer"></div>
    </div>
  )
}

export default SkeletonLoading
