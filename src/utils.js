import axios from 'axios'
import { API_KEY } from './constants'

export const getWeatherData = async (location) => {
    const URL = encodeURI(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
    return await axios.get(URL)
}
