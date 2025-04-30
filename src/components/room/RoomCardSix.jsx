import React from 'react'
import { Link } from 'react-router-dom';

function RoomCardSix(props) {
    const { roomID, roomImage, roomTitle, roomPrice } = props;
    return (
        <>
            <div className="room__card is__style__four">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link to={`/room/${roomID}`}>
                            <img
                                src={`assets/images/pages/room/${roomImage}`}
                                width={645}
                                height={438}
                                alt="scheda camera"
                            />
                        </Link>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link to={`/room/${roomID}`} className="room__card__title h4">
                        {roomTitle ? roomTitle : 'Camera Executive'}
                    </Link>
                    <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            Dimensione: 35 mq
                        </span>
                        <span>
                            <i className="flaticon-user" />
                            Persone: 5
                        </span>
                    </div>
                    <p className="font-sm">
                        Le nostre camere offrono un mix armonioso di comfort ed eleganza,
                        progettate per garantire un soggiorno eccezionale a ogni ospite.
                    </p>
                    <div className="room__price__tag">
                        <span className="h5 d-block">{roomPrice ? roomPrice : '120€'}</span>
                    </div>
                    <Link to={`/room/${roomID}`} className="room__card__link">
                        Scopri di più
                    </Link>
                </div>
            </div>
            <div className="room__card is__style__four">
                <div className="room__card__top">
                    <div className="room__card__image">
                        <Link to={`/room/${roomID}`}>
                            <img
                                src={`assets/images/pages/room/${roomImage}`}
                                width={645}
                                height={438}
                                alt="scheda camera"
                            />
                        </Link>
                    </div>
                </div>
                <div className="room__card__meta">
                    <Link to={`/room/${roomID}`} className="room__card__title h4">
                        {roomTitle ? roomTitle : 'Camera Singola'}
                    </Link>
                    <div className="room__card__meta__info">
                        <span>
                            <i className="flaticon-construction" />
                            Dimensione: 35 mq
                        </span>
                        <span>
                            <i className="flaticon-user" />
                            Persone: 5
                        </span>
                    </div>
                    <p className="font-sm">
                        Conosciuta anche come Camera Classica o Singola, questa è la tipologia
                        più essenziale, generalmente dotata dei comfort di base.
                    </p>
                    <div className="room__price__tag">
                        <span className="h5 d-block">{roomPrice ? roomPrice : '140€'}</span>
                    </div>
                    <Link to={`/room/${roomID}`} className="room__card__link">
                        Scopri di più
                    </Link>
                </div>
            </div>
        </>
    )
}

export default RoomCardSix
