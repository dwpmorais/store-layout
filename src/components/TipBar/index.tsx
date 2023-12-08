import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import data from '../../data.json'

interface tipBarItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const TipBar = () => {
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
  };

  return (
    <div className="tip-bar">
      <div className="container">
        <h4 className="title-section">Por que comprar na Maeztra?</h4>

        <Slider {...settings}>
          {
            data &&
            data?.benefits.map((item: tipBarItem) => {
              return (
                <div className="tip-bar__item" key={item.id}>
                  <div className="tip-bar__item-container">
                    <img src={item.icon} alt={item.title} />

                    <div className="tip-bar__text">
                      <h5 className="tip-bar-title">
                        {item.title}
                      </h5>
                      <p className="tip-bar-description">
                        {item.description}
                      </p>
                    </div>
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

export default TipBar
