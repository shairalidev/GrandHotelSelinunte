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
        title="Contattaci" 
        description="Che tu abbia domande, bisogno di assistenza o semplicemente voglia condividere qualcosa."
      />
      <ContactOne />
      <FooterOne />
    </div>
  )
}

export default Contact
