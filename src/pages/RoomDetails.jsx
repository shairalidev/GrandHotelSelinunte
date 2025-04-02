import React from 'react'
import TopBar from '../components/header/TopBar'
import RoomDetailsOne from '../components/room-details/RoomDetailsOne'
import SimilarRoom from '../components/room-details/SimilarRoom'
import FooterOne from '../components/footer/FooterOne'
import HeaderDark from '../components/header/HeaderDark'

function RoomDetails() {
  return (
    <div>
        <TopBar />
        <HeaderDark />
        <RoomDetailsOne />
        <SimilarRoom />
        <FooterOne />
    </div>
  )
}

export default RoomDetails