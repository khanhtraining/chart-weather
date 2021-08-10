import React from 'react'
import TodayDetailCard from './TodayDetailCard'
import './todaydetailcards.scss'

const TodayDetailCardList = (props) => {
    const itemCardList = [
        {
            id: 1,
            title: 'PSI',
            number: Math.round((props.todayDeTail?.main?.pressure) / 100),
            status: 'Good',
            className: 'content bg-number'
        },
        {
            id: 2,
            title: 'WIND SPEED',
            number: Math.round(props.todayDeTail?.wind?.speed),
            status: 'km/h',
            className: 'content normal-number'
        },
        {
            id: 3,
            title: 'DENGUE',
            number: '',
            status: '',
            className: 'content circle-shape'
        },
        {
            id: 4,
            title: '',
            number: '',
            status: 'Add',
            className: 'add-icon'
        }
    ]

    return (
        <React.Fragment>
            {
                <div className='todayDetailCards-wrapper'>
                    {itemCardList.map((items) => {
                        return <TodayDetailCard
                            title={items.title}
                            number={items.number}
                            status={items.status}
                            className={items.className}
                            {...items} />
                    })}
                </div>
            }
        </React.Fragment>
    )
}

export default TodayDetailCardList
