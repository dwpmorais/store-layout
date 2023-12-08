import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.scss'

import data from '../../data.json'

interface Product {
  id: number;
  price: string;
  name: string;
  description: string;
  img: string;
  url: string;
  colors: Color[];
}

interface Color {
  color: string;
  url: string;
}

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
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="shelf-products">
      <div className="container">
        <h3 className="title-section">As Mais Pedidas</h3>

        <Slider {...settings}>
          {
            data &&
            data?.products.map((item: Product) => {
              return (
                <div className="shelf-products-item" key={item.id}>
                  <img src={item.img} alt={item.name}/>
                  <ul className="products-sku">
                    {item?.colors &&
                      item?.colors.map((color: Color, index: number) => {
                        return (
                          <a href={color.url} key={index}>
                            <li className="product-sku-color" style={{ background: `${color.color}`}}></li>
                          </a>
                        )
                      })}
                  </ul>

                  <div className="shelf-products-infos">
                    <span className="product-price">{item.price}</span>
                    <h4 className="product-title">{item.name}</h4>
                    <span className="product-description">{item.description}</span>
                    <a className="product-buy-button" href={item.url}>
                      Adicionar
                    </a>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Shelf
