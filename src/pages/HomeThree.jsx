import React from 'react'
import BannerThree from '../components/banner/BannerThree'
import AdvanceForm from '../components/form/AdvanceForm'
import AboutThree from '../components/about/AboutThree'
import FacilitiesTwo from '../components/facilities/FacilitiesTwo'
import RoomTwo from '../components/room/RoomTwo'
import TestimonialThree from '../components/testimonials/TestimonialThree'
import VideoThree from '../components/videos/VideoThree'
import OfferThree from '../components/offer/OfferThree'
import NewsletterOne from '../components/newsletter/NewsletterOne'
import FooterTwo from '../components/footer/FooterTwo'
import posts from '../components/data/data-room.json'
import HeaderDark from '../components/header/HeaderDark'

function HomeThree() {
  return (
    <div>
        <HeaderDark />
        <BannerThree />
        <AdvanceForm />
        <AboutThree />
        <FacilitiesTwo />
        <RoomTwo posts={posts}/>
        <TestimonialThree className="is__home__two"/>
        <VideoThree />
        <OfferThree />
        <NewsletterOne />
        <FooterTwo />
    </div>
  )
}

export default HomeThree