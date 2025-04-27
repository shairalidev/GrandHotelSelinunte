import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'
import RoomEight from '../components/room/RoomEight'

function RoomFive() {
    return (
        <div>
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne
                title="Deluxe Room"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <RoomEight />
            <TestimonialOne className="section__padding" />
            <FooterOne />
        </div>
    )
}

export default RoomFive