import React from 'react'
import './locationselect.scss'

export const LocationSelect = (props) => {
    const { onSelect } = props

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
                        <select className='nav-location-dropdown' onChange={e => onSelect(e.target.value)} >
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
