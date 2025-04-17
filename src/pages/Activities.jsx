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
  title="Attività"
  description="La nostra ampia gamma di attività è pensata per offrire qualcosa a tutti."
/>

        <ActivitiesOne />
        <FooterOne />
    </div>
  )
}

export default Activities