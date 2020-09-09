import React from "react"

const Modal = ({close, image}) => (
  <div className="lightbox" onClick={() => close()}>
    <div className="burger burger-slip open lightbox__close">
      <div className="burger-lines"></div>
    </div>
    <img className="lightbox__image" src={image} alt="zdjęcie" />
  </div>
)

export default Modal