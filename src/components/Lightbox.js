import React, { useState, useEffect } from "react"

const Lightbox = ({ closeModal, index, tab }) => {
  const [status, setStatus] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(index)
  const [image, setImage] = useState(tab[index].url)

  useEffect(() => {
    document.body.parentElement.classList.add('lock')
    setStatus(true)
  },[])

  const next = () => {
    if (currentIndex < tab.length-1) {
      setImage(tab[currentIndex+1].url)
      setCurrentIndex(currentIndex+1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setImage(tab[currentIndex-1].url)
      setCurrentIndex(currentIndex-1)
    }
  }

  const close = () => {
    setStatus(false)
    closeModal()
    document.body.parentElement.classList.remove('lock')
  }

  return (
    <>
      {status && (
        <div className="lightbox">
          <div className="burger burger-slip open lightbox__close" onClick={close}>
            <div className="burger-lines"></div>
          </div>
          <button onClick={prev}>Prev</button>
          <img className="lightbox__image" src={image} alt="zdjęcie" />
          <button onClick={next}>Next</button>
          {currentIndex}
        </div>
      )}
    </>
  )
}

export default Lightbox
