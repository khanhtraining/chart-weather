import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import App from './App'
import axios from 'axios'
import { mockDataTest } from './api/mockData'
import { act } from 'react-dom/test-utils'
jest.mock('axios') // Mocked axiosInstance
describe('User action', () => {
    test('should display the temperature and humidity when user click select location', async () => {
        const clickValue = 'Singapore'
        axios.get = jest.fn().mockResolvedValueOnce(mockDataTest)
        const { getByTestId, getByText } = render(<App/>)

        act(() => {
            fireEvent.change(getByTestId('select'), {
                target: { value: clickValue }
            })
        })
        await waitForElement(() => {
            expect(getByText(mockDataTest.main.humidity)).toBeInTheDocument()
        })
    })
})
