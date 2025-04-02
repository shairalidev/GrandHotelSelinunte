import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import AboutFour from '../components/about/AboutFour'
import FacilitiesSeven from '../components/facilities/FacilitiesSeven'
import TeamOne from '../components/team/TeamOne'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function About() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne
            title="About Us" 
            description="Welcome to Italy, where luxury meets comfort in the heart of Marinella." 
        />
        <AboutFour />
        <FacilitiesSeven />
        <TeamOne />
        <TestimonialOne />
        <FooterOne />
    </div>
  )
}

export default About