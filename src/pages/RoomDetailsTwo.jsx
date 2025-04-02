import React from 'react'
import TopBar from '../components/header/TopBar'
import RoomDetails2 from '../components/room-details/RoomDetailsTwo'
import SimilarRoom from '../components/room-details/SimilarRoom'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomDetailsTwo() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <RoomDetails2 />
        <SimilarRoom />
        <FooterOne />
    </div>
  )
}

export default RoomDetailsTwo