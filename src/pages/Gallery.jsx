import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import GalleryFive from '../components/gallery/GalleryFive'
import VideoThree from '../components/videos/VideoThree'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function Gallery() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne
  title="Galleria"
  description="dove ogni immagine racconta una storia di lusso, comfort e ospitalità senza pari"
/>

        <GalleryFive />
        <VideoThree />
        <FooterOne />
    </div>
  )
}

export default Gallery