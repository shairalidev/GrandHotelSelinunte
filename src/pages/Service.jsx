import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import ServiceFive from '../components/service/ServiceFive'
import ServiceOne from '../components/service/ServiceOne'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function Service() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne
  title="I Nostri Servizi"
  description="Al Grand Hotel Selinunte siamo orgogliosi di offrire un’esperienza eccezionale."
/>

        <ServiceFive />
        <ServiceOne />
        <TestimonialOne />
        <FooterOne />
    </div>
  )
}

export default Service