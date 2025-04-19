import React, { useState} from 'react'
import "react-datepicker/dist/react-datepicker.css";
import RoomDetailsInline from '../room-details/RoomDetailsInline';

function AdvanceFormTwo() {
  
    return (
        <div className="rts__section advance__search__section is__page has__border pt-120 pb-60">
            <div className="container">
                <div className="col-12">
                    <RoomDetailsInline inline/>
                </div>
            </div>
        </div>
    )
}

export default AdvanceFormTwo