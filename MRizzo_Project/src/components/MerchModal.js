import React from "react"
import { useEffect, useState } from "react"

const MERCH_MODAL_STYLING = {
  position: "absolute",
  top: "2%",
  left: "2%",
  right: "2%",
  bottom: "2%",
  zIndex: 1000,
  backgroundColor: "rgba(0,0,0,0.9)",
  color: "black",
  transition: "all 100ms linear",
  opacity: 1,
}
const MERCH_MODAL_STYLING_LARGE_SCREEN = {
  position: "absolute",
  top: "2%",
  left: "2%",
  right: "2%",
  bottom: "2%",
  zIndex: 1000,
  backgroundColor: "red",
  color: "black",
  transition: "all 100ms linear",
  opacity: 1,
}
const MERCH_MODAL_OVERLAY = {
  position: "fixed",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  zIndex: 1000,
  backgroundColor: "rgba(0,0,0,0.8)",
}

export default function MerchModal({ isOpen, onClose, children }) {
  const [windowSize, setWindowSize] = useState(undefined)

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    console.log(windowSize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!isOpen) return false
  return (
    <>
      <div style={MERCH_MODAL_OVERLAY} />
      <div
        className="merch-modal"
        style={
          windowSize > "900px"
            ? MERCH_MODAL_STYLING_LARGE_SCREEN
            : MERCH_MODAL_STYLING
        }
      >
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>
  )
}
