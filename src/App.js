import React from '@babel/template'
import Chart from './scenes/ChartContainer/Chart'
import TodayDetail from './scenes/TodayDetail/TodayDetail'
import '../src/App.scss'
import { useEffect, useState } from 'react'
import { getWeatherData } from './utils/utils'
import { initialState } from './api/mockData'

const App = () => {
  const [selectedCity, setSelectedCity] = useState(initialState.city[2])
  const [weather, setWeather] = useState([])
  const [todayHighLight, setTodayHighLight] = useState(null)
  useEffect(() => {
    const selectCity = async () => {
      try {
        const response = await getWeatherData(selectedCity);
        setWeather(response.data)
        setTodayHighLight(response.data.weather[0])
      } catch (error) {
        console.error('Error selected city:', error);
      }
    }
    selectCity()
  },[])
  console.log(weather);
  return (
    <div className='layout__container'>
      <TodayDetail selectedCity={selectedCity} weather={weather} todayHighLight={todayHighLight}/>
      <Chart chartData = {initialState.chartWeather}/>
    </div>
  )
}

export default App
