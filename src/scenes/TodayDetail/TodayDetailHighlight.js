import React from 'react'
import './todaydetailhighlight.scss'

const TodayDetailHighlight = (props) => {
    const { icon, title, temp, humidity } = props

    return (
        <React.Fragment>
            <div className="todayDetailHighlight-wrapper">
                <div className="todayDetailHighlight-wrapper__icon">
                    <img src={`http://openweathermap.org/img/wn/${icon.weather && icon?.weather[0]?.icon}@2x.png`} alt='cloud-icon' />
                </div>
                <div className="todayDetailHighlight-wrapper__info">
                    <div className="highlight-text">{title.weather && title?.weather[0]?.main}</div>
                    <div className="highlight-info">
                        <span className="highlight-temperature">{Math.round((temp?.main?.temp)/10)}°C</span>
                        <span className="highlight-humidity">{Math.round(humidity?.main?.humidity)}%</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TodayDetailHighlight
