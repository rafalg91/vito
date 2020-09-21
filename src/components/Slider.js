import React, { useState, useEffect } from "react"
import classNames from "classnames/dedupe"

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(images[0])
  const [statusClass, setStatusClass] = useState(false)

  useEffect(() => {
    const lastImage = images.length - 1
    let i = 0

    setInterval(() => {
      i === lastImage ? (i = 0) : i++
      setStatusClass(true)
      setCurrentSlide(images[i])

      setTimeout(() => {
        setStatusClass(false)
      },4000)
    }, 5000)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <img className={classNames('slider', {'slider--active' : statusClass})} src={currentSlide.url} alt="O mnie" />
    </>
  )
}

export default Slider
