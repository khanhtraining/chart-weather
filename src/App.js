import React from '@babel/template'
import TodayDetail from './scenes/TodayDetail/TodayDetail'
import '../src/App.scss'
import { useEffect, useState } from 'react'
import { getWeatherData } from './utils'
import { initialState } from './api/mockData'
import ChartContainer from './scenes/ChartContainer/ChartContainer'

const App = () => {
  const [selectedCity, setSelectedCity] = useState(initialState.city[2])
  const [weather, setWeather] = useState([])
  const [todayHighLight, setTodayHighLight] = useState(null)

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
  },[])

  return (
    <div className='layout__container'>
      <TodayDetail selectedCity={selectedCity} weather={weather} todayHighLight={todayHighLight}/>
      <ChartContainer chartData = {initialState.chartWeather}/>
    </div>
  )
}

export default App
