import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import ActivitiesOne from '../components/activities/ActivitiesOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function Activities() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne
            title="Activities" 
            description="Our diverse range of activities is designed to offer something for everyone."
        />
        <ActivitiesOne />
        <FooterOne />
    </div>
  )
}

export default Activities