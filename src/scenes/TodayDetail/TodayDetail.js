import React from 'react'
import LocationSelect from './LocationSelect'
import TodayDetailHighlight from './TodayDetailHighlight'
import './todaydetail.scss'
import TodayDetailCardList from './TodayDetailCards/TodayDetailCardList'
export const TodayDetail = (props)=> {
    
    return (
        <div className='layout__container-todaydetail'>
            <LocationSelect todayDeTail={props.weather} selectedLocationCity={props.selectedCity} />
            <TodayDetailHighlight todayDeTail={props.weather} todayHighLight={props.todayHighLight}/>
            <TodayDetailCardList todayDeTail={props.weather}/>
        </div>
    )
}

export default TodayDetail
