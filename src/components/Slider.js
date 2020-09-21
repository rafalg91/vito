import React, { useState, useEffect } from "react"

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(images[0])

  useEffect(() => {
    const lastImage = images.length - 1
    let i = 0

    setInterval(() => {
      i === lastImage ? (i = 0) : i++
      setCurrentSlide(images[i])
    }, 4000)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <img src={currentSlide.url} alt="O mnie" />
    </>
  )
}

export default Slider
