import React from 'react'
import image from '../../../assets/logos/logo-header.png'

const Logo = () => {
  return (
    <a href="/" title="Home" className="header-logo">
      <img src={image} alt="Logo Maeztra"/>
    </a>
  )
}

export default Logo
