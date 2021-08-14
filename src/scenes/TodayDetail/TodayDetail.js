import TodayDetailHighlight from './TodayDetailHighlight'
import TodayDetailCardList from './TodayDetailCardList/TodayDetailCardList'

const TodayDetail = (props) => {
    const { weatherData } = props

    return (
        <div>
            <TodayDetailHighlight icon={weatherData} title={weatherData} temp={weatherData} humidity={weatherData} />
            <TodayDetailCardList feelsLike={weatherData} speed={weatherData} />
        </div>
    )
}

export default TodayDetail
