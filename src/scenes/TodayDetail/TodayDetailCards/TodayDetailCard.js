import React from 'react'
import './todaydetailcards.scss'

const TodayDetailCard = (props) => {
    const { title, content, className, number, classTitle, classContent } = props

    return (
        <React.Fragment>
            <div className='todayDetailCards-wrapper-item'>
                <div className={classTitle}>{title}</div>
                <div className={`my class ${className}`}>{number}</div>
                <div className={classContent}>{content}</div>
            </div>
        </React.Fragment>
    )
}

export default TodayDetailCard
