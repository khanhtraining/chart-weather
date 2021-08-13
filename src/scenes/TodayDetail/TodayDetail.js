import React from 'react'
import TodayDetailHighlight from './TodayDetailHighlight'
import './todaydetail.scss'
import TodayDetailCardList from './TodayDetailCards/TodayDetailCardList'
export const TodayDetail = (props)=> {
    
    return (
        <div>
            <TodayDetailHighlight todayDeTail={props.weather} todayHighLight={props.todayHighLight}/>
            <TodayDetailCardList todayDeTail={props.weather}/>
        </div>
    )
}

export default TodayDetail
