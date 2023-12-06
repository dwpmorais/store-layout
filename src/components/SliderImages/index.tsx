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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-main">
      <Slider {...settings}>
        <div className="slider-main__item" >
          <img src={isMobile ? image : imageMobile} alt="Title"/>
          <div className="slider-main__item-text container">
            <h1>Promoções de Outono</h1>
            <p>Confiras os melhores looks para combinar com você nesse Outono</p>
            <button type="button">Conferir</button>
          </div>
        </div>

        <div className="slider-main__item" >
          <img src={isMobile ? image : imageMobile} alt="Title"/>
          <div className="slider-main__item-text container">
            <h1>Promoções de Outono 2</h1>
            <p>Confiras os melhores looks para combinar com você nesse Outono (2)</p>
            <button type="button">Conferir</button>
          </div>
        </div>

      </Slider>
    </div>
  )
}

export default SliderImages
