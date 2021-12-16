import React from "react"

export default function MerchModal({ isOpen, children }) {
  if (!isOpen) return false
  return <div>{children}</div>
}
