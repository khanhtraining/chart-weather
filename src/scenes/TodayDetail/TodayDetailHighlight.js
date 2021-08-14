import React from 'react'
import './todaydetailhighlight.scss'

const TodayDetailHighlight = (props) => {
    const { icon, title, temp, humidity } = props

    return (
        <React.Fragment>
            <div className="todayDetailHighlight-wrapper">
                <div className="todayDetailHighlight-wrapper__icon">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='cloud-icon' />
                </div>
                <div className="todayDetailHighlight-wrapper__info">
                    <div className="highlight-text">{title}</div>
                    <div className="highlight-info">
                        <span className="highlight-temperature">{temp}°C</span>
                        <span className="highlight-humidity">{humidity}%</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TodayDetailHighlight
