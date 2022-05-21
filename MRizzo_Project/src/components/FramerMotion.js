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

const modalEffect = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.5,
      duration: 0.2,
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

const followSpan = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
  },
}

const bioDescription = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
}

const bioSpan = {
  show: {
    opacity: 1,
    y: -50,
    x: 100,
    transition: {
      delay: 0.5,
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

const upcomingShowsImg = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
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
      transition={{ duration: 0.3, delay: 0.5 }}
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
  modalEffect,
  mainTitle,
  followSpan,
  bioDescription,
  bioSpan,
  bioSocial,
  upcomingShowsImg,
  FadeInWhenVisible,
}
