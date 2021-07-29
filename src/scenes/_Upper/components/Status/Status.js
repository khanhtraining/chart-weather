import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './status.scss'
import axios from 'axios'
import { API_KEY, locationUrl } from '../../../../commons/utils'
import Params from '../Params/Params'
const Status = ({ locationId }) => {
    const [weather, setWeather] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${locationUrl}?id=${locationId}&appid=${API_KEY}`)
                setWeather(response.data)
            } catch (err) {
            }
        }
        fetchData()
    }, [weather])
    return (
        <React.Fragment>
            <div className='location'>{weather.name} </div>
            <div className="weatherStatus-wrapper">
                <div className="weatherStatus-wrapper__icon">
                </div>
                <div className="weatherStatus-wrapper__info">
                    <div className="status-text"></div>
                    <div className="status-info">
                        <span className="status-temperature"> {Math.round((weather?.main?.temp)/10)}C</span>
                        <span className="status-humidity">{Math.round((weather?.main?.humidity))}%</span>
                    </div>
                </div>
            </div>
            <Params dataFromStatus={weather}/>
        </React.Fragment>
    )
}

Status.propTypes = {
    locationId: PropTypes.string
}

export default Status
