import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import WOW from 'wowjs'; // Import DatePicker styles

function AdvanceForm() {
    useEffect(() => {
        new WOW.WOW().init();
    }, []);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    return (
        <div className="rts__section advance__search__section is__home__one">
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        </div>
    );
}

export default AdvanceForm;