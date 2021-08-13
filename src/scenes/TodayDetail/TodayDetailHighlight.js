import React from 'react'
import './todaydetailhighlight.scss'

const TodayDetailHighlight = (props) => {
    const { weather, highlight } = props

    return (
        <React.Fragment>
            <div className="todayDetailHighlight-wrapper">
                <div className="todayDetailHighlight-wrapper__icon">
                    <img src={`http://openweathermap.org/img/wn/${highlight?.icon}@2x.png`} alt='cloud-icon' />
                </div>
                <div className="todayDetailHighlight-wrapper__info">
                    <div className="highlight-text">{highlight?.main}</div>
                    <div className="highlight-info">
                        <span className="highlight-temperature">{Math.round((weather?.main?.temp)/10)}°C</span>
                        <span className="highlight-humidity">{Math.round(weather?.main?.humidity)}%</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TodayDetailHighlight
