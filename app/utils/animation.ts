export const slideAnimation = (
  type: "container" | "item" | "regular" = "regular",
  delay: number = 0,
  fromRight: boolean = false,
) => {
  const duration = 1.5
  const amount = 0.2
  const x = fromRight ? 100 : -100
  const containerVariants = {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        staggerChildren: 0.2,
        duration: duration,
      },
    },
  }

  const itemVariants = {
    initial: {
      opacity: 0,
      x,
    },
    inView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        type: "spring",
        bounce: 0.5,
      },
    },
  }

  const regular = {
    initial: {
      opacity: 0,
      x,
    },
    inView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        type: "spring",
        bounce: 0.5,
      },
    },
  }

  if (type === "container") {
    return {
      initial: "initial",
      whileInView: "inView",
      variants: containerVariants,
      viewport: { once: true, amount: amount },
    }
  }

  if (type === "item") {
    return {
      variants: itemVariants,
      viewport: { once: true, amount: amount },
    }
  }
  if (type === "regular") {
    return {
      initial: "initial",
      whileInView: "inView",
      variants: regular,
      viewport: { once: true, amount: amount },
    }
  }
}
