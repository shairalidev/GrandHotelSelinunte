import React from 'react'
import BannerFive from '../components/banner/BannerFive'
import AdvanceForm from '../components/form/AdvanceForm'
import AboutFour from '../components/about/AboutFour'
import RoomThree from '../components/room/RoomThree'
import ServiceTwo from '../components/service/ServiceTwo'
import FacilitiesFour from '../components/facilities/FacilitiesFour'
import TestimonialFive from '../components/testimonials/TestimonialFive'
import BlogTwo from '../components/blog/BlogTwo'
import NewsletterTwo from '../components/newsletter/NewsletterTwo'
import FooterFour from '../components/footer/FooterFour'
import posts from '../components/data/data-room.json'
import HeaderDark from '../components/header/HeaderDark'

function HomeFive() {
  return (
    <div>
        <HeaderDark />
        <BannerFive />
        <AdvanceForm />
        <AboutFour />
        <RoomThree posts={posts}/>
        <ServiceTwo />
        <FacilitiesFour />
        <TestimonialFive />
        <BlogTwo />
        <NewsletterTwo />
        <FooterFour />
    </div>
  )
}

export default HomeFive