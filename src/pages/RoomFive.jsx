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
                title="Camera Quintupla"
                description="Ideale per gruppi numerosi o famiglie allargate. Cinque posti letto comodi, climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
            />
            <RoomEight />
            <TestimonialOne className="section__padding" />
            <FooterOne />
        </div>
    )
}

export default RoomFive
