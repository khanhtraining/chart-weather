import React from 'react'
import TodayDetailAdd from './TodayDetailAdd'
import TodayDetailCard from './TodayDetailCard'
import './todaydetailcards.scss'

const TodayDetailCardList = (props) => {
    const { feelsLike, speed } = props
    const itemCardList = [
        {
            title: 'PSI',
            content: feelsLike,
            extra: 'Good',
            contentClassName: 'bg-number'
        },
        {
            title: 'WIND SPEED',
            content: speed,
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
