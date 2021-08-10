import React from 'react'
import { itemCard } from '../../../api/mockData'
import TodayDetailCard from './TodayDetailCard'
import './todaydetailcards.scss'

const TodayDetailCards = (props) => {
    return (
        <React.Fragment>
            {
                <div className='todayDetailCards-wrapper'>
                    {itemCard.map((items) => {
                        return <TodayDetailCard todayDetailCards={props.todayDeTail} key={items.id} {...items}></TodayDetailCard>
                    })}
                </div>
            }
        </React.Fragment>
    )
}

export default TodayDetailCards
