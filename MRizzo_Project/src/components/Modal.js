import React, { useEffect } from "react"
import { modalEffect } from "../components/FramerMotion"
import { motion } from "framer-motion"

const MERCH_MODAL_STYLING = {
  zIndex: 1000,
  backgroundColor: "rgba(0,0,0,0.9)",
  color: "black",
  transition: "all 100ms linear",
  opacity: 1,
}
const MERCH_MODAL_STYLING_LARGE_SCREEN = {
  position: "fixed",
  top: "2%",
  left: "2%",
  right: "2%",
  bottom: "10%",
  zIndex: 1000,
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
  backgroundColor: "rgba(0,0,0,0.9)",
}

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    function windowSize() {
      window.addEventListener("resize", () => window.innerWidth)
    }
    windowSize()
  }, [])

  if (!isOpen) return false

  return (
    <>
      <motion.div
        style={MERCH_MODAL_OVERLAY}
        variants={modalEffect}
        initial="hidden"
        animate="show"
      />
      <div
        className="modal"
        style={
          window.innerWidth > "200"
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
