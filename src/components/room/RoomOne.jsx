import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Core Swiper styles
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import RoomCardOne from './RoomCardOne';
import posts from '../data/data-room.json';

function RoomOne({ className }) {
    console.log(posts); // Debug: Check if multiple rooms exist

    return (
        <div className={`rts__section ${className}`}>
            <div className="container">
                <div className="row">
                    <div className="section__wrapper mb-40 wow fadeInUp">
                        <div className="section__content__left">
                            <span className="h6 subtitle__icon__two d-block wow fadeInUp">
                                Camere
                            </span>
                            <h2 className="content__title h2 lh-1">Le Nostre Camere</h2>
                        </div>
                        <div className="section__content__right">
                            <p>
                                Le nostre camere offrono un'armoniosa combinazione di comfort ed eleganza,
                                progettate per garantire un soggiorno eccezionale a ogni ospite. Ogni camera
                                dispone di letti comodi, biancheria di alta qualità e una selezione di
                                cuscini per garantire un sonno riposante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Swiper Slider */}
            <div className="row">
                <Swiper
                    className="main__room__slider overflow-hidden wow fadeInUp"
                    data-wow-delay=".5s"
                    modules={[Pagination]}
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={posts.length > 1}
                    autoplay={false}
                    pagination={{ el: ".rts-pagination", clickable: true }}
                    speed={1000}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        575: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 2.5 },
                        1200: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                >
                    {/* Dynamic Room Data */}
                    {posts.length > 0 ? (
                        posts.map((data) => (
                            <SwiperSlide key={data.id}>
                                <RoomCardOne
                                    roomID={data.id}
                                    roomImage={data.image}
                                    roomTitle={data.title}
                                    roomPrice={data.price}
                                />
                            </SwiperSlide>
                        ))
                    ) : (
                        <p>Nessuna camera disponibile</p>
                    )}
                </Swiper>

                {/* Pagination */}
                <div className="rts__pagination">
                    <div className="rts-pagination" />
                </div>
            </div>
        </div>
    );
}

export default RoomOne;
