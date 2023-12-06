import React from "react";

import { Header } from "../components/Header/";
import { Footer } from "../components/Footer/Footer";
import SliderImages from "../components/SliderImages/";
import Shelf from "../components/Shelf/";
import TipBar from "../components/TipBar/";
import Brands from "../components/Brands/";
import BannerFooter from "../components/SliderImages/BannerFooter";

const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <SliderImages/>
        <TipBar/>
        <Brands/>
        <Shelf/>
        {/*<BannerFooter/>*/}
      </main>
      <Footer/>
    </>
  )
}

export { Home };
