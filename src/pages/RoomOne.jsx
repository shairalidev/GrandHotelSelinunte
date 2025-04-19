import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomSix from '../components/room/RoomSix'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomOne() {
    return (
        <div>
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne
                title="Deluxe Room"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            
            <RoomSix />
            <TestimonialOne />
            <FooterOne />
        </div>
    )
}

export default RoomOne