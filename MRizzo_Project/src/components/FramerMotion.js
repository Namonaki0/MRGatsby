import * as React from "react"
import { motion } from "framer-motion"

const navbarEffect = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
}

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      duration: 0.5,
    },
  },
}

const mainTitle = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      duration: 0.5,
    },
  },
}

const bioDescription = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.8,
      duration: 0.5,
    },
  },
}

const bioSocial = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delayChildren: 1,
      duration: 0.5,
    },
  },
}

const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 },
      }}
    >
      {children}
    </motion.div>
  )
}

export {
  navbarEffect,
  container,
  mainTitle,
  bioDescription,
  bioSocial,
  FadeInWhenVisible,
}
