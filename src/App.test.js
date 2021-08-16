import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import axios from 'axios'
import { hcmWeather, singaporeWeather } from './api/mockData'

jest.mock('axios')

describe('User action', () => {
    test('should display the weather detail when load page', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(singaporeWeather)
        const { getByText } = render(<App />)

        // wait for data loaded
        await waitFor(() => {
            expect(getByText(/Rain/, { selector: '.highlight-text' })).toBeInTheDocument()
        })
        expect(getByText(/30/, { selector: '.highlight-temperature' })).toBeInTheDocument()
        expect(getByText(/80/, { selector: '.highlight-humidity' })).toBeInTheDocument()
        expect(getByText(/30/, { selector: '.bg-number' })).toBeInTheDocument()
        expect(getByText(/4/, { selector: '.normal-number' })).toBeInTheDocument()
    })

    test('should display the weather detail when users select a location', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(singaporeWeather).mockResolvedValueOnce(hcmWeather)
        const { getByTestId, getByText } = render(<App />)

        fireEvent.change(getByTestId('select'), {
            target: { value: 'Ho Chi Minh City' }
        })

        // wait for data loaded
        await waitFor(() => {
            expect(getByText(/Clouds/, { selector: '.highlight-text' })).toBeInTheDocument()
        })
        expect(getByText(/31/, { selector: '.highlight-temperature' })).toBeInTheDocument()
        expect(getByText(/46/, { selector: '.highlight-humidity' })).toBeInTheDocument()
        expect(getByText(/31/, { selector: '.bg-number' })).toBeInTheDocument()
        expect(getByText(/3/, { selector: '.normal-number' })).toBeInTheDocument()
    })
})
