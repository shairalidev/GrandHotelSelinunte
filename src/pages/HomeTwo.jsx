import React from 'react'
import TopBar from '../components/header/TopBar'
import BannerTwo from '../components/banner/BannerTwo'
import AdvanceForm from '../components/form/AdvanceForm'
import AboutTwo from '../components/about/AboutTwo'
import FacilitiesTwo from '../components/facilities/FacilitiesTwo'
import RoomTwo from '../components/room/RoomTwo'
import TestimonialTwo from '../components/testimonials/TestimonialTwo'
import VideoTwo from '../components/videos/VideoTwo'
import OfferTwo from '../components/offer/OfferTwo'
import GalleryTwo from '../components/gallery/GalleryTwo'
import FooterOne from '../components/footer/FooterOne'
import posts from '../components/data/data-room.json'
import HeaderDark from '../components/header/HeaderDark'

function HomeTwo() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BannerTwo />
        <AdvanceForm />
        <AboutTwo />
        <FacilitiesTwo />
        <RoomTwo posts={posts}/>
        <TestimonialTwo />
        <VideoTwo />
        <OfferTwo />
        <GalleryTwo />
        <FooterOne />
    </div>
  )
}

export default HomeTwo