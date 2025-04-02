import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomSeven from '../components/room/RoomSeven'
import TestimonialFive from '../components/testimonials/TestimonialFive'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomTwo() {
    return (
        <div> 
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne 
                title="Deluxe Room"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <RoomSeven />
            <TestimonialFive />
            <FooterOne />
        </div>

    )
}

export default RoomTwo