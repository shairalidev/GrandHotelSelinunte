import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import CheckoutInner from '../components/room/CheckoutInner'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function CheckOut() {
    return (
        <div className='cart-page'>
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne
                title="Checkout"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <CheckoutInner />
            <FooterOne />
        </div>
    )
}

export default CheckOut