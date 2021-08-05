import React from 'react'
import TodayDetailCardAdd from './TodayDetailCardAdd'
import TodayDetailCardDegue from './TodayDetailCardDegue'
import TodayDetailCardPSI from './TodayDetailCardPSI'
import TodayDetailCardWind from './TodayDetailCardWind'
import './todaydetailcards.scss'

export const TodayDetailCards = (props) => {
    return (
        <React.Fragment>
            {
                <div className='todayDetailCards-wrapper'>
                    <TodayDetailCardPSI psiData = {props.todayDeTail}/>
                    <TodayDetailCardWind windData = {props.todayDeTail}/>
                    <TodayDetailCardDegue />
                    <TodayDetailCardAdd />
                </div>
            }
        </React.Fragment>
    )
}

export default TodayDetailCards
