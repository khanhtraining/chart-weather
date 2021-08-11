import React from 'react'
import TodayDetailCard from './TodayDetailCard'
import './todaydetailcards.scss'

const TodayDetailCardList = (props) => {
    const itemCardList = [
        {
            id: 1,
            title: 'PSI',
            number: Math.round((props.todayDeTail?.main?.pressure) / 100),
            content: 'Good',
            className: 'content bg-number',
            classTitle: 'title',
            classContent: 'extra'
        },
        {
            id: 2,
            title: 'WIND SPEED',
            number: Math.round(props.todayDeTail?.wind?.speed),
            content: 'km/h',
            className: 'content normal-number',
            classTitle: 'title',
            classContent: 'extra'
        },
        {
            id: 3,
            title: 'DENGUE',
            number: '',
            content: '',
            className: 'content circle-shape',
            classTitle: 'title',
            classContent: 'extra'
        },
        {
            id: 4,
            title: '',
            number: '',
            content: 'Add',
            className: 'add-icon',
            classTitle: '',
            classContent: 'add-text'
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
                            content={items.content}
                            className={items.className}
                            classTitle={items.classTitle}
                            classContent={items.classContent}
                            {...items} />
                    })}
                </div>
            }
        </React.Fragment>
    )
}

export default TodayDetailCardList
