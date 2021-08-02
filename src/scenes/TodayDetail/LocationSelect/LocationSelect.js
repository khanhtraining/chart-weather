import React from 'react'
import './locationselect.scss'

export const LocationSelect = (props) => {
    return (
        <div>
            <div className='nav-container'>
                <div className='nav-burger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='nav-location'>
                    <div className='nav-location-name'>myENV</div>
                    <div className='nav-location-dropdown'>
                        <span className='nav-location-dropdown'>
                            {props.todayDeTail.name}
                        </span>
                        <span className='icon-arrow'></span>
                    </div>
                </div>
                <div className='nav-notification'></div>
            </div>
        </div>
    )
}

export default LocationSelect
