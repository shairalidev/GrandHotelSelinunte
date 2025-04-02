import React from 'react'
import TopBar from '../components/header/TopBar'
import BannerOne from '../components/banner/BannerOne'
import AdvanceForm from '../components/form/AdvanceForm'
import AboutOne from '../components/about/AboutOne'
import FacilitiesOne from '../components/facilities/FalicitiesOne'
import RoomOne from '../components/room/RoomOne'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import VideoOne from '../components/videos/VideoOne'
import OfferOne from '../components/offer/OfferOne'
import GalleryOne from '../components/gallery/GalleryOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function HomeOne() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BannerOne />
        <AdvanceForm />
        <AboutOne />
        <FacilitiesOne />
        <RoomOne className="pt-120"/>
        <TestimonialOne />
        <VideoOne />
        <OfferOne />
        <GalleryOne />
        <FooterOne />
    </div>
  )
}

export default HomeOne