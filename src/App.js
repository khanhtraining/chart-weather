import { useEffect, useState } from 'react'
import React from '@babel/template'
import { getWeatherData } from './utils'
import { chartWeather } from './api/mockData'
import TodayDetail from './scenes/TodayDetail/TodayDetail'
import ChartContainer from './scenes/ChartContainer/ChartContainer'
import '../src/App.scss'

const App = () => {
  const [selectedCity, setSelectedCity] = useState('Singapore')
  const [weather, setWeather] = useState([])
  const [todayHighLight, setTodayHighLight] = useState(null)

  const onSelect = (selectedOption) => {
    setSelectedCity(selectedOption)
  }

  useEffect(() => {
    const selectCity = async () => {
      try {
        const response = await getWeatherData(selectedCity)
        setWeather(response.data)
        setTodayHighLight(response.data.weather[0])
      } catch (error) {
        console.error('Error selected city:', error)
      }
    }
    selectCity()
  }, [selectedCity])

  return (
    <div className='layout__container'>
      <TodayDetail onSelect={onSelect} weather={weather} todayHighLight={todayHighLight} />
      <ChartContainer chartData={chartWeather} />
    </div>
  )
}

export default App
