import React, { useState } from 'react'

import Brands from '../components/Brands'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Shelf from '../components/Shelf'
import SliderImages from '../components/SliderImages'
import TipBar from '../components/TipBar'
import Modal from '../components/Modal'

const Home = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <>
      <Modal isOpen={modalOpen} onClose={closeModal} />
      <Header/>
      <main>
        <SliderImages/>
        <TipBar/>
        <Brands/>
        <Shelf/>
        <HeroSection/>
      </main>
      <Footer/>
    </>
  )
}

export default Home
