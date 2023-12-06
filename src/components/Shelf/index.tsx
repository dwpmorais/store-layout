import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

import data from '../../data.json'

const Shelf = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="carousel-product-cards">
      <h3>As Mais Pedidas</h3>
      <Slider {...settings}>
        {data &&
          data?.products.map((e: any) => {
            return (
              <div className="carousel-product-cards__container" key={e.id}>
                <img src={e.img} alt={e.name}/>
                <div className="carousel-product-cards__container-text">
                  <ul className="carousel-product-cards__container-colors">
                    {e.colors &&
                      e.colors.map((color: any, index: number) => {
                        return (
                          <a
                            className="carousel-product-cards__link"
                            href={color.url}
                          >
                            <li
                              style={{
                                background: `${color.color}`,
                                height: '27px',
                                width: '27px',
                              }}
                            ></li>
                          </a>
                        )
                      })}
                  </ul>

                  <p className="price">{e.price}</p>
                  <h4>{e.name}</h4>
                  <p className="description">{e.description}</p>
                  <a className="buy-button" href={e.url}>
                    Adicionar
                  </a>
                </div>
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default Shelf
