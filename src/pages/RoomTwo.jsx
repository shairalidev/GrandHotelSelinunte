import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomSeven from '../components/room/RoomSeven'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomTwo() {
    return (
        <div> 
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne 
                title="Camera Matrimoniale"
                description="Spaziosa e luminosa, perfetta per coppie o amici. Dotata di tutti i comfort: climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
            />
            <RoomSeven />
            <TestimonialOne />
            <FooterOne />
        </div>
    )
}

export default RoomTwo
