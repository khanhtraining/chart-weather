import React from 'react'
import './todaydetailcards.scss'

const TodayDetailCard = (props) => {
    const { title, extra, contentClassName, content } = props

    return (
        <React.Fragment>
            <div className='todayDetailCards-wrapper-item'>
                <div role='title' className='title'>{title}</div>
                <div className={`content ${contentClassName}`}>{content}</div>
                <div className='extra'>{extra}</div>
            </div>
        </React.Fragment>
    )
}

export default TodayDetailCard
