import React from 'react'
import TodayDetailAdd from './TodayDetailAdd'
import TodayDetailCard from './TodayDetailCard'
import './todaydetailcards.scss'

const TodayDetailCardList = (props) => {
    const itemCardList = [
        {
            title: 'PSI',
            content: Math.round((props.todayDeTail?.main?.feels_like) / 10) || 23,
            extra: 'Good',
            contentClassName: 'bg-number'
        },
        {
            title: 'WIND SPEED',
            content: Math.round(props.todayDeTail?.wind?.speed) || '--',
            extra: 'km/h',
            contentClassName: 'normal-number'
        },
        {
            title: 'DENGUE',
            contentClassName: 'circle-shape'
        }
    ]

    return (
        <React.Fragment>
            {
                <div className='todayDetailCards-wrapper'>
                    {itemCardList.map((item) => {
                        return <TodayDetailCard {...item} />
                    })}
                    <TodayDetailAdd />
                </div>
            }
        </React.Fragment>
    )
}

export default TodayDetailCardList
