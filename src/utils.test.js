import axios from "axios"
import { API_KEY } from "./constants"
import initialState from './api/mockData'
import { getWeatherData } from "./utils";
jest.mock("axios");

describe("getData", () => {
    test("fetch API test successfull", async () => {
        axios.get.mockResolvedValue({ initialState });
        await expect(getWeatherData('Singapore')).resolves.toEqual({ initialState });

        expect(axios.get).toHaveBeenCalledWith(
            `https://api.openweathermap.org/data/2.5/weather?q=Singapore&appid=${API_KEY}`
        )
    })
    test("fetch API test expect failed", async () => {
        const errorMessage = "Network Error";

        axios.get.mockRejectedValue(new Error(errorMessage));

        await expect(getWeatherData('Singapore')).rejects.toThrow(errorMessage);
    });
})
