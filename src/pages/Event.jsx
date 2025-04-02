import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import EventTwo from '../components/event/EventTwo'
import NewsletterThree from '../components/newsletter/NewsletterThree'
import ServiceSix from '../components/service/ServiceSix'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function Event() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne 
            title="Events" 
            description="Our diverse range of activities is designed to offer something for everyone."
        />
        <EventTwo />
        <NewsletterThree />
        <ServiceSix />
        <FooterOne />
    </div>
  )
}

export default Event