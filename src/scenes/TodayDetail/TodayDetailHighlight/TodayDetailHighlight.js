import React from 'react'
import PropTypes from 'prop-types'
import './todaydetailhighlight.scss'
const TodayDetailHighlight = (props) => {
    return (
        <React.Fragment>
            <div className="todayDetailHighlight-wrapper">
                <div className="todayDetailHighlight-wrapper__icon">
                    {
                        props.todayHighLight ? <img src={`http://openweathermap.org/img/wn/${props.todayHighLight?.icon}@2x.png`} alt='cloud-icon' /> : <>
                        </>
                    }
                </div>
                <div className="todayDetailHighlight-wrapper__info">
                    {props.todayHighLight ? <div className="highlight-text">{props.todayHighLight?.main}</div> : <>
                    </>}
                    <div className="highlight-info">
                        <span className="highlight-temperature">{Math.round((props.todayDeTail?.main?.temp) / 10)}°C</span>
                        <span className="highlight-humidity">{Math.round((props.todayDeTail?.main?.humidity))}%</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

TodayDetailHighlight.propTypes = {
    locationId: PropTypes.string
}

export default TodayDetailHighlight
