import React from 'react';
import TopBar from '../components/header/TopBar';
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne';
import TestimonialOne from '../components/testimonials/TestimonialOne';
import FooterOne from '../components/footer/FooterOne';
import HeaderDark from '../components/header/HeaderDark';
import RoomDetailsGallery from './RoomDetailsGallery';
import RoomNine from '../components/room/RoomNine';

function RoomFive() {
  return (
    <div>
      <TopBar />
      <HeaderDark />
      <BreadcrumbOne
        title="Camera Quintupla"
        description="Ideale per gruppi numerosi o famiglie allargate. Cinque posti letto comodi, climatizzazione, TV, cassaforte, frigobar, veranda e bagno privato."
      />

      <RoomDetailsGallery
        title="Camera Quintupla"
        description={`La Camera Quintupla è la soluzione perfetta per gruppi numerosi o famiglie allargate che desiderano comfort e spazio.
Con i suoi cinque comodi posti letto e una disposizione intelligente, garantisce relax e funzionalità per tutti.

Un'ampia veranda, servizi completi e arredi moderni rendono questa camera ideale per soggiorni prolungati in compagnia.`}
        galleryImages={[
          '/assets/images/pages/room/quintupla/1.webp',
          '/assets/images/pages/room/quintupla/2.webp',
          '/assets/images/pages/room/quintupla/3.webp',
          '/assets/images/pages/room/quintupla/4.webp'
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
          'Cinque Letti Singoli o Combinazioni Modulari',
          'Controllo del Clima',
          'TV a Schermo Piatto',
          'Macchina per Caffè/Tè',
          'Ampio Bagno Privato',
          'Spazi per Famiglie Numerose'
        ]}
        featureImage="/assets/images/pages/room/quintupla/feature.webp"
      />

      <RoomNine />
      <TestimonialOne className="section__padding" />
      <FooterOne />
    </div>
  );
}

export default RoomFive;
