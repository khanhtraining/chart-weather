import { useEffect, useState } from 'react'
import axios from 'axios'
import { chartWeather } from './api/mockData'
import TodayDetail from './scenes/TodayDetail/TodayDetail'
import LocationSelect from './scenes/LocationSelect/LocationSelect'
import ChartContainer from './scenes/ChartContainer/ChartContainer'
import { locationUrl, API_KEY } from './constants'
import '../src/App.scss'

const App = () => {
  const [location, setLocation] = useState('Singapore')
  const [weatherData, setWeatherData] = useState([])

  const onSelect = (selectedLocation) => {
    setLocation(selectedLocation)
  }

  useEffect(() => {
    axios.get(`${locationUrl}?q=${location}&appid=${API_KEY}`)
      .then(response => {
        setWeatherData(response.data)
      })
  }, [location])

  return (
    <div className='layout__container'>
      <div className='layout__container-upper-section'>
        <LocationSelect onSelect={onSelect} />
        <TodayDetail
          icon={weatherData.weather && weatherData?.weather[0]?.icon}
          title={weatherData.weather && weatherData?.weather[0]?.main}
          temp={Math.round((weatherData?.main?.temp) / 10)}
          humidity={Math.round(weatherData?.main?.humidity)}
          feelsLike={Math.round((weatherData?.main?.feels_like) / 10)}
          speed={Math.round(weatherData?.wind?.speed)}
        />
      </div>
      <ChartContainer chartData={chartWeather} />
    </div>
  )
}

export default App
