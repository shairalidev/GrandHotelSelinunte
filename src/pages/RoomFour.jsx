import React from 'react';
import TopBar from '../components/header/TopBar';
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne';
import TestimonialOne from '../components/testimonials/TestimonialOne';
import FooterOne from '../components/footer/FooterOne';
import HeaderDark from '../components/header/HeaderDark';
import RoomDetailsGallery from './RoomDetailsGallery';

function RoomFour() {
  return (
    <div>
      <TopBar />
      <HeaderDark />
      <BreadcrumbOne
        title="Camera Quadrupla"
        description="Perfetta per famiglie o gruppi, con quattro posti letto comodi, climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
      />

      <RoomDetailsGallery
        title="Camera Quadrupla"
        description={`La Camera Quadrupla è progettata per ospitare comodamente famiglie o gruppi di amici.
Spaziosa e ben organizzata, offre quattro comodi posti letto, un ambiente luminoso e tutti i comfort necessari.

Questa camera rappresenta la soluzione ideale per chi desidera condividere la vacanza senza rinunciare alla comodità.`}
        galleryImages={[
          '/assets/images/pages/room/quadrupla/1.webp',
          '/assets/images/pages/room/quadrupla/2.webp',
          '/assets/images/pages/room/quadrupla/3.webp',
          '/assets/images/pages/room/quadrupla/4.webp'
        ]}
        amenities={[
          [
            { icon: '/assets/images/icon/wifi.svg', text: 'Wi-Fi Gratuito' },
            { icon: '/assets/images/icon/shower.svg', text: 'Doccia' },
            { icon: '/assets/images/icon/aeroplane.svg', text: 'Trasporto Aeroportuale' }
          ],
          [
            { icon: '/assets/images/icon/balcony.svg', text: 'Balcone' },
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
          
        featureImage="/assets/images/pages/room/quadrupla/feature.webp"
      />


      <TestimonialOne className="section__padding" />
      <FooterOne />
    </div>
  );
}

export default RoomFour;
