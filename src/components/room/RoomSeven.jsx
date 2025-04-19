import React, { useState } from 'react';
import RoomCardFive from './RoomCardFive';
import posts from '../data/data-room.json';
import { Link } from 'react-router-dom';

function RoomSeven() {
    const [visiblePosts, setVisiblePosts] = useState(6);
    const postsPerLoad = 3;

    const handleLoadMore = () => {
        setVisiblePosts((prev) => prev + postsPerLoad);
    };

    return (
        <>
            {/* Single Rooms Section */}
            <div className="rts__section pt-120">
                <div className="container">
                    <div className="row justify-content-center g-30">
                        {/* Full Width Room Cards */}
                        <div className="col-12">
                            <div className="row justify-content-center g-30">
                                {posts.slice(0, visiblePosts).map((data, index) => (
                                    <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                        <RoomCardFive
                                            roomID={data.id}
                                            roomImage={`${data.image}`}
                                            roomTitle={data.title}
                                            roomPrice={data.price}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Load More Button Centered */}
                            {visiblePosts < posts.length && (
                                <div className="load__more__link">
                                    <Link to="#" onClick={handleLoadMore}>Load More</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomSeven;
