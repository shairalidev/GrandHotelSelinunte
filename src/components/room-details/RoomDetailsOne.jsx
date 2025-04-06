import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Posts from '../data/data-room.json';
import RoomBooking from './RoomBooking';

import CustomSlotSelect from './CustomSlotSelect';
import { slots } from './RoomBooking';

function RoomDetailsOne() {
  const { id } = useParams();
  const roomPost = Posts.find(post => post.id === parseInt(id));

  useEffect(() => {
    RoomBooking.attachFormListeners();
  }, []);

  if (!roomPost) {
    return <div>Post not found!</div>;
  }

  return (
    <>
      {/* room details area */}
      <div className="rts__section single page__hero__height page__hero__bg no__shadow">
        <img src={`/assets/images/pages/room/${roomPost.bannerImg}`} alt="" />
      </div>

      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5 sticky-wrap">
            <div className="col-xxl-8 col-xl-7">
              <div className="room__details">
                <span className="h4 price">{roomPost.price}</span>
                <h2 className="room__title">{roomPost.title}</h2>
                <div className="room__meta">
                  <span><i className="flaticon-construction" /> 35 sqm</span>
                  <span><i className="flaticon-user" />5 Person</span>
                </div>
                <p>
                  Our elegantly appointed rooms and suites are designed to offer the
                  utmost in comfort and style. Each room features modern amenities,
                  plush furnishings, and thoughtful touches to ensure a relaxing stay.
                  <br /><br />
                  Indulge in a culinary journey at our on-site restaurants, where
                  our talented chefs create mouthwatering dishes using the freshest
                  local ingredients. Start your day with a sumptuous breakfast,
                  enjoy a leisurely lunch, and savor a gourmet dinner in an elegant
                  setting.
                </p>

                <div className="room__image__group row row-cols-md-2 row-cols-sm-1 mt-30 mb-50 gap-4 gap-md-0">
                  <div className="room__image__item">
                    <img className="rounded-2" src="/assets/images/pages/room/r-d-1.webp" alt="" />
                  </div>
                  <div className="room__image__item">
                    <img className="rounded-2" src="/assets/images/pages/room/r-d-2.webp" alt="" />
                  </div>
                </div>

                <span className="h4 d-block mb-30">Room Amenities</span>
                <div className="room__amenity mb-50">
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/wifi.svg" height={30} width={36} alt="" />
                      <span>Free Wifi</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/shower.svg" height={30} width={36} alt="" />
                      <span>Shower</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/aeroplane.svg" height={30} width={36} alt="" />
                      <span>Airport transport</span>
                    </div>
                  </div>
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/balcony.svg" height={30} width={36} alt="" />
                      <span>Balcony</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/refrigerator.svg" height={30} width={36} alt="" />
                      <span>Refrigerator</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/support.svg" height={30} width={36} alt="" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                  <div className="group__row">
                    <div className="single__item">
                      <img src="/assets/images/icon/desk.svg" height={30} width={36} alt="" />
                      <span>Work Desk</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/fitness.svg" height={30} width={36} alt="" />
                      <span>Fitness Center</span>
                    </div>
                    <div className="single__item">
                      <img src="/assets/images/icon/swimming-pool.svg" height={30} width={36} alt="" />
                      <span>Swimming Pool</span>
                    </div>
                  </div>
                </div>

                <span className="h4 d-block mb-50">Room Features</span>
                <div className="room__feature mb-30">
                  <div className="room__feature__image mb-50">
                    <img className="rounded-2" src="/assets/images/pages/room/r-d-3.webp" alt="" />
                  </div>
                  <div className="group__row">
                    <ul className="list__item">
                      <li>Children and extra beds</li>
                      <li>Climate Control</li>
                      <li>Art and Decor</li>
                      <li>Coffee/Tea Maker</li>
                      <li>High-End Bedding</li>
                      <li>Smart Technology</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Our elegantly appointed rooms and suites are designed to offer the
                  utmost in comfort and style. Each room features modern amenities,
                  plush furnishings, and thoughtful touches to ensure a relaxing stay.
                </p>
              </div>
            </div>

            {/* Booking form starts here */}
            <div className="col-xxl-4 col-xl-5 sticky-item">
              <div className="rts__booking__form has__background is__room__details sticky-item">
                <form id="scheduleForm" className="advance__search">
                  <h5 className="pt-0">Book Your Stay</h5>
                  
<div className="advance__search__wrapper">

                    {/* Custom Slot Selector */}
                    <CustomSlotSelect
                      slots={slots}
                      onSelect={(slot) => {
                        const hiddenSlotInput = document.getElementById('slotSelect');
                        if (hiddenSlotInput) {
                          hiddenSlotInput.value = JSON.stringify(slot);
                        }
                        RoomBooking.calculateTotalPrice();
                      }}
                    />
                    <div className="query__input wow fadeInUp">
                      <label htmlFor="adults" className="query__label">Adult</label>
                      <div className="query__input__position">
                        <select id="adults" className="form-select">
                          {[...Array(7)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1} Person</option>
                          ))}
                        </select>
                        <div className="query__input__icon">
                          <i className="flaticon-user"></i>
                        </div>
                      </div>
                    </div>

                    <div className="query__input wow fadeInUp">
                      <label htmlFor="children612" className="query__label">Child</label>
                      <div className="query__input__position">
                        <select id="children612" className="form-select">
                          {[...Array(8)].map((_, i) => (
                            <option key={i} value={i}>{i} Child</option>
                          ))}
                        </select>
                        <div className="query__input__icon">
                          <i className="flaticon-user"></i>
                        </div>
                      </div>
                    </div>

                    <h5 className="p-0 mt-20">Extra Services</h5>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" id="pet" />
                      <label htmlFor="pet">Pet-Friendly</label>
                      <span>€30 per stay</span>
                    </div>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" id="crib" />
                      <label htmlFor="crib">Crib Service</label>
                      <span>€10 / Night</span>
                    </div>

                    <div className="query__input checkbox wow fadeInUp">
                      <input type="checkbox" id="pool" />
                      <label htmlFor="pool">Pool View</label>
                      <span>€10 / Night</span>
                    </div>

                    <div className="total__price">
                      <span className="total h6 mb-0">Total Price</span>
                      <span className="price h6 m-0" id="totalPrice">€0.00</span>
                    </div>

                    <button type="submit" className="theme-btn btn-style fill no-border search__btn wow fadeInUp" data-wow-delay=".6s">
                      <span>Book Your Room</span>
                    </button>

                    <div id="confirmationMessage" style={{ marginTop: 15, fontWeight: 'bold', color: 'green' }}></div>

                  </div>
                </form>
              </div>
            </div>
            {/* Booking form ends here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomDetailsOne;
