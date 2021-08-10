import React from 'react'
import './todaydetailcards.scss'

const TodayDetailCard = (props) => {
    const { id, title, status } = props

    return (
        <React.Fragment>
            <div className='todayDetailCards-wrapper-item'>
                <div className='title'>{title}</div>
                {
                    id === 1 ? <div className='content bg-number'>{Math.round((props.todayDetailCards?.main?.pressure) / 100)}</div> : null
                }
                {
                    id === 2 ? <div className='content normal-number'>{Math.round(props.todayDetailCards?.wind?.speed)}</div> : null
                }
                {
                    id === 3 ? <div className='content circle-shape'></div> : null
                }
                {
                    id === 4 ? <div className='add-icon' key={3}></div> : null
                }
                <div className='extra'>{status}</div>
            </div>
        </React.Fragment>
    )
}

export default TodayDetailCard
