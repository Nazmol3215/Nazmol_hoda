import React from 'react';
import FrstCon from '../Pages/Home/FrstCon';
import TextComponent from '../Pages/Home/TextComponent';
import FaqPage from '../TestGPT/TestOne';
import TestimonialSlider from '../Pages/Home/TestimonialSlider';
import Footer from '../Layout/Footer';
import Chat from '../LiveChat/Chat';
import OffcanvasExample from '../Layout/Header';
import Portfolio from '../Portfolio/Portfolio';



export default function Pages() {
  return (
    <>
      <OffcanvasExample />
      <FrstCon />
      <TextComponent />
      <TestimonialSlider />
      <Portfolio />
      <FaqPage />
      <Chat />
      <Footer />

    </>
  )
}

