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
            title="The Restaurant" 
            description="Whether you are in the mood for a leisurely breakfast, a business lunch, or a romantic dinner."
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