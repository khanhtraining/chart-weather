import React from 'react'
import TodayDetailCardAdd from './components/TodayDetailCardAdd'
import TodayDetailCardDegue from './components/TodayDetailCardDegue'
import TodayDetailCardPSI from './components/TodayDetailCardPSI'
import TodayDetailCardWind from './components/TodayDetailCardWind'
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
