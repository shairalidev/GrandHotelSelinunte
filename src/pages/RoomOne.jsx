import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomSeven from '../components/room/RoomSeven'
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
            
            <RoomSeven />
            <TestimonialOne />
            <FooterOne />
        </div>
    )
}

export default RoomOne