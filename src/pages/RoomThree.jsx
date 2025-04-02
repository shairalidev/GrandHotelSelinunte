import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomEight from '../components/room/RoomEight'
import TestimonialSix from '../components/testimonials/TestimonialSix'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomThree() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne 
            title="Deluxe Room"
            description="A step up from the standard room, often with better views, more space, and additional amenities."
        />
        <RoomEight />
        <TestimonialSix className="section__padding" />
        <FooterOne />
    </div>
  )
}

export default RoomThree