import React from 'react'
import posts from '../data/data-room.json';
import RoomCardFour from '../room/RoomCardFour';
function SimilarRoom() {

    return (
        <>
            {/* similar room area */}
            <div className="rts__section pb-120">
                <div className="container">
                    <div className="row justify-content-center text-center mb-40">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="section__topbar">
                                <span className="h6 subtitle__icon__three mx-auto">
                                    Similar Rooms
                                </span>
                                <h2 className="section__title">Similar Rooms</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-30">
                        {posts.map((data, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <RoomCardFour
                                    roomID={data.id}
                                    roomImage={`${data.image}`}
                                    roomTitle={data.title}
                                    roomPrice={data.price}
                                />
                            </div>
                        )).slice(0, 3)}
                    </div>

                </div>
            </div>
            {/* similar room area end */}
        </>

    )
}

export default SimilarRoom