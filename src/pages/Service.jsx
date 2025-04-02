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
            title="Our Service" 
            description="At Grand Hotel Selinunte we pride ourselves on delivering an exceptional experience."
        />
        <ServiceFive />
        <ServiceOne />
        <TestimonialOne />
        <FooterOne />
    </div>
  )
}

export default Service