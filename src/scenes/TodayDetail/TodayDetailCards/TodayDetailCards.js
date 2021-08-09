import React, { useEffect, useState } from 'react'
import TodayDetailCard from './TodayDetailCard'
import './todaydetailcards.scss'

const TodayDetailCards = (props) => {
    const itemsTop = ['PSI', 'WIND SPEED', 'DENGUE', '']
    const [itemList, setItemList] = useState([])
    console.log(itemList);
    useEffect(() => {
        itemsTop.forEach((item, index) => {
            itemList.push(
                <TodayDetailCard key={index} itemsTop={itemsTop} itemList={itemList} item={item}>
                    {item}
                </TodayDetailCard>
            )
            console.log({ item });
        })
        setItemList(itemList)
    }, [])
    return (
        <React.Fragment>
            {
                <div className='todayDetailCards-wrapper'>
                    {itemList}
                </div>
            }

        </React.Fragment>
    )
}

export default TodayDetailCards
