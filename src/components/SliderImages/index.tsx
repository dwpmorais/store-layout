import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

import image from '../../assets/slider/slide1.png'
import imageMobile from '../../assets/slider/slide1-mobile.png'

const SliderImages = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth >= 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 1024)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="carousel">
      <Slider {...settings}>
        <a className="carousel-item__container" href="/">
          <img src={isMobile ? image : imageMobile} alt="Title"/>
          <div className="carousel-item__container-text">
            <h1>Promoções de Outono</h1>
            <p>Confiras os melhores looks para combinar com você nesse
              Outono</p>
            <button>Conferir</button>
          </div>
        </a>

        <a className="carousel-item__container" href="/">
          <img src={isMobile ? image : imageMobile} alt="Title"/>

          <div className="carousel-item__container-text">
            <h1>Promoções de Outono 2</h1>
            <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.</p>
            <button>Conferir</button>
          </div>
        </a>
      </Slider>
    </div>
  )
}

export default SliderImages
