import React from 'react'
import '../todaydetailcards.scss'

export const TodayDetailCardWind = (props) => {
    return (
        <React.Fragment>
            {
                <div className='todayDetailCards-wrapper-item'>
                    <div className='title'>WIND SPEED</div>
                    <div className='content normal-number'>{Math.round(props.windData?.wind?.speed)*10}</div>
                    <div className='extra'>km/h</div>
                </div>
            }
        </React.Fragment>
    )
}

export default TodayDetailCardWind
