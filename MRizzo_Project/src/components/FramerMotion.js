export const container = {
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

export const bioDescription = {
  firstState: { opacity: 0, width: 0 },
  expand: {
    opacity: 1,
    width: 100,
    transition: {
      delayChildren: 0.5,
      duration: 0.5,
    },
  },
}
