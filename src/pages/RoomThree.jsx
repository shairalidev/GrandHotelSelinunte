import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomEight from '../components/room/RoomEight'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomThree() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne 
            title="Camera Tripla"
            description="Ideale per piccoli gruppi o famiglie. Dotata di tre comodi letti, climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
        />
        <RoomEight />
        <TestimonialOne className="section__padding" />
        <FooterOne />
    </div>
  )
}

export default RoomThree
