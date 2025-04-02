import React from 'react'
import TopBar from '../components/header/TopBar'
import BreadcrumbOne from '../components/breadcrumb/BreadcrumbOne'
import BlogThree from '../components/blog/BlogThree'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function Blog() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <BreadcrumbOne
            title="Our Blog" 
            description="Discover The blog where luxury, comfort, and adventure come together."
        />
        <BlogThree />
        <FooterOne />

    </div>
  )
}

export default Blog