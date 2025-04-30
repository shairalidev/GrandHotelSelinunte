import React, { useEffect, lazy, Suspense } from 'react';

const TopBar = lazy(() => import('../components/header/TopBar'));
const HeaderDark = lazy(() => import('../components/header/HeaderDark'));
const BannerOne = lazy(() => import('../components/banner/BannerOne'));
const AdvanceForm = lazy(() => import('../components/form/AdvanceForm'));
const AboutFour = lazy(() => import('../components/about/AboutFour'));
const FacilitiesOne = lazy(() => import('../components/facilities/FalicitiesOne'));
const RoomOne = lazy(() => import('../components/room/RoomOne'));
const TestimonialThree = lazy(() => import('../components/testimonials/TestimonialThree'));
const VideoOne = lazy(() => import('../components/videos/VideoOne'));
const GalleryOne = lazy(() => import('../components/gallery/GalleryOne'));
const FooterOne = lazy(() => import('../components/footer/FooterOne'));

function HomeDark() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  return (
    <Suspense fallback={<div>Caricamento...</div>}>
      <div>
        <TopBar />
        <HeaderDark />
        <BannerOne />
        <AdvanceForm />
        <AboutFour />
        <FacilitiesOne />
        <RoomOne className="section__padding" />
        <TestimonialThree className="is__home__one" />
        <VideoOne />
        <GalleryOne />
        <FooterOne />
      </div>
    </Suspense>
  );
}

export default HomeDark;
