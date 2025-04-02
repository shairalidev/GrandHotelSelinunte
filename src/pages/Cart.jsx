import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import CartInner from '../components/room/CartInner'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function Cart() {
    return (
        <div className='cart-page'>
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne
                title="Cart"
                description="A step up from the standard room, often with better views, more space, and additional amenities."
            />
            <CartInner />
            <FooterOne />
        </div>
    )
}

export default Cart