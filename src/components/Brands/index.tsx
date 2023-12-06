import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

import data from '../../data.json'

interface Brand {
  id: number;
  title: string;
  img: string;
}

const Brands = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
        },
      },
    ],
  }

  return (
    <div className="carousel-brands">
      <div className="container">
        <h4 className="title-section">Marcas Parceiras</h4>

        <Slider {...settings}>
          {
            data &&
            data?.brands.map((item: Brand) => {
              return (
                <div className="brands-item" key={item.id}>
                  <img src={item.img} alt={item.title}/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Brands
