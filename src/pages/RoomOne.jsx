import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import TestimonialOne from '../components/testimonials/TestimonialOne'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'
import RoomDetailsGallery from './RoomDetailsGallery'
function RoomOne() {
    return (
        <div>
            <TopBar />
            <HeaderDark />
            <BreadcrumbOne
                title="Camera Singola"
                description="Accogliente e funzionale, ideale per viaggiatori singoli. Dotata di climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
            />
<RoomDetailsGallery
  title="Camera Singola"
  description={`Le nostre camere arredate con eleganza sono progettate per offrire il massimo comfort e stile.
Ogni camera è dotata di comfort moderni, arredi raffinati e dettagli pensati per garantire un soggiorno rilassante.

Concediti un viaggio culinario nei nostri ristoranti in loco, dove i nostri talentuosi chef creano piatti deliziosi utilizzando ingredienti locali freschissimi.`}
  galleryImages={[
    '/assets/images/pages/room/single/1.webp',
    '/assets/images/pages/room/single/2.webp',
    '/assets/images/pages/room/single/3.webp',
    '/assets/images/pages/room/single/4.webp'
  ]}
  amenities={[
    [
      { icon: '/assets/images/icon/wifi.svg', text: 'Wi-Fi Gratuito' },
      { icon: '/assets/images/icon/shower.svg', text: 'Doccia' },
      { icon: '/assets/images/icon/aeroplane.svg', text: 'Trasporto Aeroportuale' }
    ],
    [
      
      { icon: '/assets/images/icon/refrigerator.svg', text: 'Frigorifero' },
      { icon: '/assets/images/icon/support.svg', text: 'Supporto 24/7' }
    ],
    [
      { icon: '/assets/images/icon/desk.svg', text: 'Scrivania' },
      { icon: '/assets/images/icon/swimming-pool.svg', text: 'Piscina Esterna' }
    ]
  ]}
  features={[
    'Controllo del Clima',
    'Biancheria di Alta Qualità',
    'Mini Frigo',
    'TV',
    'Cassaforte'
  ]}
  
  featureImage="/assets/images/pages/room/r-d-5.webp"
/>
            <TestimonialOne />
            <FooterOne />
        </div>
    )
}

export default RoomOne
