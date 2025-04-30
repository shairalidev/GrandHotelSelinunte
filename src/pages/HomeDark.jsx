import React, { useEffect } from 'react'
import TopBar from '../components/header/TopBar'
import HeaderDark from '../components/header/HeaderDark'
import BannerOne from '../components/banner/BannerOne'
import AdvanceForm from '../components/form/AdvanceForm'
import FacilitiesOne from '../components/facilities/FalicitiesOne'
import RoomOne from '../components/room/RoomOne'
import TestimonialThree from '../components/testimonials/TestimonialThree'
import VideoOne from '../components/videos/VideoOne'
import GalleryOne from '../components/gallery/GalleryOne'
import FooterOne from '../components/footer/FooterOne'
import AboutFour from '../components/about/AboutFour'
function HomeDark() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    return () => {
      document.documentElement.removeAttribute("data-theme"); // Cleanup when leaving this page
    };

  }, []);

  return (
    <div>
      <TopBar />
      <HeaderDark />
      <BannerOne />
      <AdvanceForm />
      <AboutFour />
      <FacilitiesOne />
      <RoomOne className="section__padding"/>
      <TestimonialThree className="is__home__one"/>
      <VideoOne/>
      <GalleryOne />
      <FooterOne />
    </div>
  )
}

export default HomeDark