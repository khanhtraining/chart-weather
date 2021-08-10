import React from 'react'
import './todaydetailcards.scss'

const TodayDetailCard = (props) => {
    const { title, status, className, number } = props
    console.log(number);
    return (
        <React.Fragment>
            <div className='todayDetailCards-wrapper-item'>
                <div className='title'>{title}</div>
                <div className={className}>{number}</div>
                <div className='extra'>{status}</div>
            </div>
        </React.Fragment>
    )
}

export default TodayDetailCard
