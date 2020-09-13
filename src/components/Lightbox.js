import React, { useState, useEffect } from "react"
import ReactPlayer from "react-player"

const Lightbox = ({ closeModal, index, tab }) => {
  const [currentIndex, setCurrentIndex] = useState(index)
  const [image, setImage] = useState(tab[index])

  useEffect(() => {
    document.body.parentElement.classList.add("lock")
  }, [])

  const next = () => {
    const maxLength = tab.length - 1
    const newIndex = currentIndex + 1

    if (currentIndex < maxLength) {
      setImage(tab[newIndex])
      setCurrentIndex(newIndex)
    }
  }

  const prev = () => {
    const newIndex = currentIndex + 1

    if (currentIndex > 0) {
      setImage(tab[newIndex])
      setCurrentIndex(newIndex)
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
        <button onClick={prev}>Prev</button>
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
        <button onClick={next}>Next</button>
      </div>
    </>
  )
}

export default Lightbox
