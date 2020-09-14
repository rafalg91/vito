import React, { useState, useEffect } from "react"
import ReactPlayer from "react-player"
import Arrow from "../components/Arrow"

const Lightbox = ({ closeModal, index, tab }) => {
  const [currentIndex, setCurrentIndex] = useState(index)
  const [image, setImage] = useState(tab[index])
  const maxLength = tab.length - 1

  useEffect(() => {
    document.body.parentElement.classList.add("lock")
  }, [])

  const next = () => {
    const newIndex = currentIndex + 1

    if (currentIndex < maxLength) {
      setImage(tab[newIndex])
      setCurrentIndex(newIndex)
    } else {
      setImage(tab[0])
      setCurrentIndex(0)
    }
  }

  const prev = () => {
    const newIndex = currentIndex - 1

    if (currentIndex > 0) {
      setImage(tab[newIndex])
      setCurrentIndex(newIndex)
    } else {
      setImage(tab[maxLength])
      setCurrentIndex(maxLength)
    }
  }

  const close = () => {
    closeModal()
    document.body.parentElement.classList.remove("lock")
  }

  return (
    <>
      <div className="lightbox">
        <div
          className="burger burger-slip open lightbox__close"
          onClick={close}
        >
          <div className="burger-lines"></div>
        </div>
        <div className="lightbox__arrow lightbox__arrow--left" onClick={prev}>
          <Arrow />
        </div>
        <div className="lightbox__arrow lightbox__arrow--right" onClick={next}>
          <Arrow />
        </div>
        {image.type.name === "image" && (
          <img className="lightbox__content" src={image.url} alt="zdjęcie" />
        )}
        {image.type.name === "video" && (
          <ReactPlayer
            className="lightbox__content lightbox__content--video"
            width="100%"
            height="100%"
            url={image.yt}
          />
        )}
      </div>
    </>
  )
}

export default Lightbox
