import React, { useEffect } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import WOW from 'wowjs'; // Import DatePicker styles
import RoomDetailsInline from '../room-details/RoomDetailsInline';

function AdvanceForm() {
    useEffect(() => {
        new WOW.WOW().init();
    }, []);


    return (
        <div className="rts__section advance__search__section is__home__one">
            <div className="container">
                <div className="row">
                    <RoomDetailsInline inline/>
                </div>
            </div>
        </div>
    );
}

export default AdvanceForm;