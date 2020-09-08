import React from 'react'
import banner from '../assets/images/art/3.jpg'

const Contact = () => {
  const bannerStyle = {
    background: 'url('+banner+')',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center 200px',
    backgroundSize: 'cover',
  }

  return (
    <>
      <section className="section pt-0">
        <div className="container contact">
          <div>
            <h2 className="title contact__title">
              Wojciech Jurek
            </h2>
            <h3 className="title title--small">
              Zapraszam do kontaktu!
            </h3>
          </div>
          <div>
            <h2 className="title title--small">
              Dane kontaktowe
            </h2>
            <nav className="contact__nav">
              <a className="link" href="tel:782545415">
                782 545 415
              </a>
              <a className="link" href="mailto:wojtekjurek@gmail.com">
                wojtekjurek@gmail.com
              </a>
            </nav>
          </div>
          <div>
            <h2 className="title title--small">
              Social Media
            </h2>
            <nav className="contact__nav">
              <a className="link" href="https://instagram.com">
                Instagram
              </a>
              <a className="link" href="https://youtube.com">
                Youtube
              </a>
            </nav>
          </div>
        </div>
      </section>
      <div className="contact__banner" style={bannerStyle}>
      </div>
    </>
  )
}

export default Contact