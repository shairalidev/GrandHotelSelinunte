import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomNine from '../components/room/RoomNine'
import TestimonialSix from '../components/testimonials/TestimonialSix'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomFour() {
    return (
        <div>
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne
                title="Deluxe Room"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <RoomNine />
            <TestimonialSix className="section__padding" />
            <FooterOne />
        </div>
    )
}

export default RoomFour