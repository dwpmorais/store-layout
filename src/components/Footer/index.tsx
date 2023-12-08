import React from 'react'
import Newsletter from './Newsletter'
import Menus from './Menus'
import SocialPayments from './SocialPayments'

import './style.scss'

const Footer = () => {
  return (
    <footer>
      <Newsletter/>
      <Menus/>
      <SocialPayments/>
    </footer>
  )
}

export default Footer
