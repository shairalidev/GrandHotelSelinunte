import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import RoomNine from '../components/room/RoomNine'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomFour() {
    return (
        <div>
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne
                title="Camera Quadrupla"
                description="Perfetta per famiglie o gruppi, con quattro posti letto comodi, climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
            />
            <RoomNine />
            <TestimonialOne className="section__padding" />
            <FooterOne />
        </div>
    )
}

export default RoomFour
