import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import ContactOne from '../components/contact/ContactOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function Contact() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne 
            title="Contact Us" 
            description="Whether you have questions, need assistance, or simply want to share."
        />
        <ContactOne />
        <FooterOne />
    </div>
  )
}

export default Contact