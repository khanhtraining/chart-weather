import TodayDetailHighlight from './TodayDetailHighlight'
import TodayDetailCardList from './TodayDetailCardList/TodayDetailCardList'

const TodayDetail = (props) => {
    const { icon, title, temp, humidity, feelsLike, speed } = props

    return (
        <div>
            <TodayDetailHighlight icon={icon} title={title} temp={temp} humidity={humidity} />
            <TodayDetailCardList feelsLike={feelsLike} speed={speed} />
        </div>
    )
}

export default TodayDetail
