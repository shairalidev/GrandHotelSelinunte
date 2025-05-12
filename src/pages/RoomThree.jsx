import React from 'react';
import TopBar from '../components/header/TopBar';
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne';
import RoomEight from '../components/room/RoomEight';
import TestimonialOne from '../components/testimonials/TestimonialOne';
import FooterOne from '../components/footer/FooterOne';
import HeaderDark from '../components/header/HeaderDark';
import RoomDetailsGallery from './RoomDetailsGallery';

function RoomThree() {
  return (
    <div>
      <TopBar />
      <HeaderDark />
      <BreadcrumbOne
        title="Camera Tripla"
        description="Ideale per piccoli gruppi o famiglie. Dotata di tre comodi letti, climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
      />

      <RoomDetailsGallery
        title="Camera Tripla"
        description={`La Camera Tripla è perfetta per piccoli gruppi o famiglie che desiderano condividere uno spazio confortevole.
Queste camere offrono ampi spazi, luminosità e funzionalità per un soggiorno rilassante e pratico.

L’arredamento moderno si combina con i servizi essenziali per garantire una permanenza piacevole per tutti gli ospiti.`}
        galleryImages={[
          '/assets/images/pages/room/tripla/1.webp',
          '/assets/images/pages/room/tripla/2.webp',
          '/assets/images/pages/room/tripla/3.webp',
          '/assets/images/pages/room/tripla/4.webp'
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
        
        featureImage="/assets/images/pages/room/tripla/feature.webp"
      />

      <RoomEight />
      <TestimonialOne className="section__padding" />
      <FooterOne />
    </div>
  );
}

export default RoomThree;
