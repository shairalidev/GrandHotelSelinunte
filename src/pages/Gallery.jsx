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
            title="Gallery" 
            description="where every image tells a story of luxury, comfort, and unparalleled hospitality"
        />
        <GalleryFive />
        <VideoThree />
        <FooterOne />
    </div>
  )
}

export default Gallery