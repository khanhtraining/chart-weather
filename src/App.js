import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { chartWeather } from './api/mockData'
import TodayDetail from './scenes/TodayDetail/TodayDetail'
import LocationSelect from './scenes/LocationSelect/LocationSelect'
import ChartContainer from './scenes/ChartContainer/ChartContainer'
import { locationUrl, API_KEY } from './constants'
import '../src/App.scss'

const App = () => {
  const [location , setLocation] = useState('Singapore')
  const [weather, setWeather] = useState([])
  const [highlight, setHighlight] = useState(null)

  const onSelect = (selectedLocation) => {
    setLocation(selectedLocation)
  }

  const loadWeatherData = useCallback(async () => {
    const response = await axios.get(`${locationUrl}?q=${location}&appid=${API_KEY}`)
    setWeather(response.data)
    setHighlight(response.data.weather[0])
  }, [location])

  useEffect(() => {
    loadWeatherData()
  }, [loadWeatherData])

  return (
    <div className='layout__container'>
      <div className='layout__container-upper-section'>
        <LocationSelect onSelect={onSelect} />
        <TodayDetail weather={weather} highlight={highlight} />
      </div>
      <ChartContainer chartData={chartWeather} />
    </div>
  )
}

export default App
