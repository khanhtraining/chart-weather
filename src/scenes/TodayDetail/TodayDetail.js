import TodayDetailHighlight from './TodayDetailHighlight'
import TodayDetailCardList from './TodayDetailCardList/TodayDetailCardList'

const TodayDetail = ({ weatherData }) => {
    const icon = weatherData.weather && weatherData.weather[0]?.icon
    const title = weatherData.weather && weatherData.weather[0]?.main
    const temp = weatherData.main?.temp
    const humidity = weatherData.main?.humidity
    const feelsLike = weatherData.main?.feels_like
    const speed = weatherData.wind?.speed

    return (
        <div>
            <TodayDetailHighlight icon={icon} title={title} temp={temp} humidity={humidity} />
            <TodayDetailCardList feelsLike={feelsLike} speed={speed} />
        </div>
    )
}

export default TodayDetail
