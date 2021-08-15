import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import axios from 'axios'
import { API_KEY, locationUrl } from './constants'
import { mockDataTest } from './api/mockData'
jest.mock('axios')
describe('User action', () => {
    test('should display the temperature and humidity when user click select location', async () => {
        const clickValue = 'Singapore'
        axios.get = jest.fn().mockResolvedValue(`${locationUrl}?q=${clickValue}&appid=${API_KEY}`, {
            status: 200,
            body: { data: mockDataTest }
        })
        const { getByTestId, getByText } = render(<App />)

        fireEvent.change(getByTestId('select'), {
            target: { value: clickValue }
        })
        expect(getByText(mockDataTest.name)).toBeInTheDocument()
    })
})
