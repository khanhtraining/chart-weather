import React, { useState } from 'react'
import './locationselect.scss'

export const LocationSelect = (props) => {
    const { onSelect } = props
    const [selectedOption, setSelectedOption] = useState('')
    onSelect(selectedOption)
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
                        <select className='nav-location-dropdown' name="locations" id="locations" onChange={(e) => setSelectedOption(e.target.value)} >
                            <option value="Singapore">Singapore</option>
                            <option value="Cambridge">Cambridge</option>
                            <option value="Ho Chi Minh City">Ho Chi Minh</option>
                            <option value="Washington D.C.">Washington</option>
                            <option value="Manchester">Manchester</option>
                            <option value="Venezuela">Venezuela</option>
                        </select>
                    </div>
                </div>
                <div className='nav-notification'></div>
            </div>
        </div >
    )
}

export default LocationSelect
