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
                        <span data-testid='today' className='nav-location-dropdown'>
                            <select className='nav-location-dropdown' name="locations" id="locations" onChange={(e) => setSelectedOption(e.target.value)} >
                                <option value="Singapore">Singapore</option>
                                <option value="London">Lôn Đôn</option>
                                <option value="Ho Chi Minh">Hồ Chí Minh</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div className='nav-notification'></div>
            </div>
        </div>
    )
}

export default LocationSelect
