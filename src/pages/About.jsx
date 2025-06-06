import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import AboutFour from '../components/about/AboutFour'
import FacilitiesSeven from '../components/facilities/FacilitiesSeven'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function About() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne
  title="Chi Siamo"
  description="Benvenuti in Italia, dove il lusso incontra il comfort nel cuore di Marinella."
/>

        <AboutFour />
        <FacilitiesSeven />
        {/*<TeamOne />*/}
        <TestimonialOne />
        <FooterOne />
    </div>
  )
}

export default About