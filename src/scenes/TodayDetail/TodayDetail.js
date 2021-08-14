import TodayDetailHighlight from './TodayDetailHighlight'
import TodayDetailCardList from './TodayDetailCardList/TodayDetailCardList'

const TodayDetail = (props) => {
    const { weather, highlight } = props

    return (
        <div>
            <TodayDetailHighlight weather={weather} highlight={highlight} />
            <TodayDetailCardList weather={weather} />
        </div>
    )
}

export default TodayDetail
