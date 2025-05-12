import React from 'react';
import { Link } from 'react-router-dom';

function RoomCardSix({ roomID, roomImage, roomTitle, roomPrice, reverse }) {
    return (
        <div className={`room__card is__style__four ${reverse ? 'if__is__reverse' : ''}`}>
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
                    {roomTitle || 'Camera'}
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
                    {roomTitle && roomTitle.toLowerCase().includes('singola')
                        ? 'Conosciuta anche come Camera Classica o Singola, questa è la tipologia più essenziale, generalmente dotata dei comfort di base.'
                        : 'Le nostre camere offrono un mix armonioso di comfort ed eleganza, progettate per garantire un soggiorno eccezionale a ogni ospite.'}
                </p>
                <div className="room__price__tag">
                    <span className="h5 d-block">{roomPrice || ''}</span>
                </div>
                <Link to={`/room/${roomID}`} className="room__card__link">
                    Scopri di più
                </Link>
            </div>
        </div>
    );
}

export default RoomCardSix;
