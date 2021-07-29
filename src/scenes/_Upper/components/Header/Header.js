import React, { useState } from 'react'
import { defaultLocation } from '../../../../__mock__/mockData'
import './header.scss'
import Status from '../Status/Status'

export const Header = () => {
    const [locationId, setLocationId] = useState(defaultLocation.id)

    return (
        <div>
            <div className="nav-container">
                <div className="nav-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="nav-location">
                    <div className="nav-location-name">myENV</div>
                    <div className="nav-location-dropdown">
                        <section>
                        </section>
                    </div>
                </div>
                <div className="nav-notification"></div>
            </div>
            <Status locationId={locationId} />
        </div>
    )
}

export default Header
