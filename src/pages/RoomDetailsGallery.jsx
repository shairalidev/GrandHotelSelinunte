import React from 'react';

function RoomDetailsGallery({
  title,
  description,
  galleryImages,
  amenities,
  features,
  featureImage
}) {
  return (
    <>
      {/* Room Content */}
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-12">
              <div className="room__details">

                {/* Title and Description */}
                <h2 className="room__title">{title}</h2>
                <p>{description}</p>

                {/* Gallery */}
                {galleryImages?.length > 0 && (
  <div className="masonry-gallery">
    {galleryImages.map((img, idx) => (
      <div className="masonry-item" key={idx}>
        <img src={img} alt={`room ${idx + 1}`} />
      </div>
    ))}
  </div>
)}



                {/* Amenities */}
                {amenities?.length > 0 && (
                  <>
                    <span className="h4 d-block mb-30">Servizi della Camera</span>
                    <div className="room__amenity mb-50">
                      {amenities.map((row, rowIndex) => (
                        <div className="group__row" key={rowIndex}>
                          {row.map((item, itemIndex) => (
                            <div className="single__item" key={itemIndex}>
                              <img src={item.icon} height={30} width={36} alt={item.text} />
                              <span>{item.text}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Features */}
                {features?.length > 0 && (
                  <>
                    <span className="h4 d-block mb-50">Caratteristiche della Camera</span>
                    <div className="room__feature mb-30">
                      {featureImage && (
                        <div className="room__feature__image mb-50">
                        </div>
                      )}
                      <div className="group__row">
                        <ul className="list__item">
                          {features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomDetailsGallery;
