import React from "react"

const MERCH_MODAL_STYLING = {
  position: "fixed",
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
  if (!isOpen) return false
  return (
    <>
      <div style={MERCH_MODAL_OVERLAY} />
      <div className="merch-modal" style={MERCH_MODAL_STYLING}>
        <button className="modal-close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>
  )
}
