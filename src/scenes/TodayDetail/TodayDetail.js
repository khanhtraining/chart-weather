import React from 'react'
import LocationSelect from './LocationSelect'
import TodayDetailHighlight from './TodayDetailHighlight'
import './todaydetail.scss'
import TodayDetailCards from './TodayDetailCards/TodayDetailCards'
export const TodayDetail = (props)=> {
    
    return (
        <div className='layout__container-todaydetail'>
            <LocationSelect todayDeTail={props.weather} selectedLocationCity={props.selectedCity} />
            <TodayDetailHighlight todayDeTail={props.weather} todayHighLight={props.todayHighLight}/>
            <TodayDetailCards todayDeTail={props.weather}/>
        </div>
    )
}

export default TodayDetail
