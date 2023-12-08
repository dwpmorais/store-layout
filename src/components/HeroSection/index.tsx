import React from 'react'
import bannerFooter from '../../assets/banners/banner-hero-section.jpg'

import './style.scss'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section-wrapper">
          <div className="hero-section-info">
            <h4 className="hero-section-title">Lorem ipsum </h4>
            <p className="hero-section-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
              dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut
              mauris integer. Nibh sagittis in lobortis sed cursus condimentum
              velit pharetra. Amet luctus ut vulputate scelerisque placerat
              consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec
              tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut
              ornare augue eget convallis volutpat aliquet. Sed sed pellentesque
              porttitor phasellus donec condimentum sit sapien.
            </p>
          </div>

          <div className="hero-section-image">
            <img loading="lazy" src={bannerFooter} alt="bannerFooter"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
