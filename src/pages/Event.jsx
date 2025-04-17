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
  title="Eventi"
  description="La nostra ampia gamma di attività è pensata per offrire qualcosa a tutti."
/>

        <EventTwo />
        <NewsletterThree />
        <ServiceSix />
        <FooterOne />
    </div>
  )
}

export default Event