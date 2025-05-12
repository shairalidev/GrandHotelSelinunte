import React from 'react';
import TopBar from '../components/header/TopBar';
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne';
import RoomSeven from '../components/room/RoomSeven';
import TestimonialOne from '../components/testimonials/TestimonialOne';
import FooterOne from '../components/footer/FooterOne';
import HeaderDark from '../components/header/HeaderDark';
import RoomDetailsGallery from './RoomDetailsGallery';

function RoomTwo() {
  return (
    <div>
      <TopBar />
      <HeaderDark />
      <BreadcrumbOne
        title="Camera Matrimoniale"
        description="Spaziosa e luminosa, perfetta per coppie o amici. Dotata di tutti i comfort: climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
      />

      <RoomDetailsGallery
        title="Camera Matrimoniale"
        description={`La Camera Matrimoniale è l’ideale per coppie o amici che cercano spazio, luce e comfort.
Queste camere offrono un’atmosfera calda e accogliente, con arredi eleganti e funzionali.

Sono dotate di tutti i comfort moderni per assicurare un soggiorno rilassante e piacevole.`}
        galleryImages={[
          '/assets/images/pages/room/matrimoniale/1.webp',
          '/assets/images/pages/room/matrimoniale/2.webp',
          '/assets/images/pages/room/matrimoniale/3.webp',
          '/assets/images/pages/room/matrimoniale/4.webp'
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
        featureImage="/assets/images/pages/room/matrimoniale/feature.webp"
      />

      <RoomSeven />
      <TestimonialOne />
      <FooterOne />
    </div>
  );
}

export default RoomTwo;
