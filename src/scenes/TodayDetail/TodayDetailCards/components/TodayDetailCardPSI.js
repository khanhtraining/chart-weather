import React from 'react'
import '../todaydetailcards.scss'

export const TodayDetailCardPSI = (props) => {
    return (
        <React.Fragment>
            {
                <div className='todayDetailCards-wrapper-item'>
                    <div className='title'>PSI</div>
                    <div className='content bg-number'>{Math.round((props.psiData?.main?.pressure)/100)}</div>
                    <div className='extra'>Good</div>
                </div>
            }
        </React.Fragment>
    )
}

export default TodayDetailCardPSI
