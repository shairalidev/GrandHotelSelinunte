import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import AboutSeven from '../components/about/AboutSeven'
import GalleryFour from '../components/gallery/GalleryFour'
import FoodMenuOne from '../components/menu/FoodMenuOne'
import TestimonialSix from '../components/testimonials/TestimonialSix'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function Resturant() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne
  title="Il Ristorante"
  description="Che tu abbia voglia di una colazione rilassante, di un pranzo di lavoro o di una cena romantica."
/>

        <AboutSeven />
        <GalleryFour />
        <FoodMenuOne />
        <TestimonialSix className="section__padding"/>
        <FooterOne />
    </div>
  )
}

export default Resturant