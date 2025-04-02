import React from 'react'
import BannerSeven from '../components/banner/BannerSeven'
import RoomFive from '../components/room/RoomFive'
import AboutSix from '../components/about/AboutSix'
import ServiceFour from '../components/service/ServiceFour'
import TestimonialSeven from '../components/testimonials/TestimonialSeven'
import FacilitiesSix from '../components/facilities/FacilitiesSix'
import EventOne from '../components/event/EventOne'
import FooterSix from '../components/footer/FooterSix'
import posts from '../components/data/data-room.json'
import HeaderDark from '../components/header/HeaderDark'

function HomeSeven() {
  return (
    <div>
        <HeaderDark />
        <BannerSeven />
        <RoomFive posts={posts}/>
        <AboutSix />
        <ServiceFour />
        <TestimonialSeven />
        <FacilitiesSix />
        <EventOne />
        <FooterSix />
    </div>
  )
}

export default HomeSeven