import axios from "axios"
export const API_KEY = `8bf0e71ebb4f3f8564b5e650915e955e`
export const locationUrl = `http://api.openweathermap.org/data/2.5/weather`
export const callApiWeather = async (locationName) => {
    return await axios.get(`${locationUrl}?q=${locationName}&appid=${API_KEY}`)
}
