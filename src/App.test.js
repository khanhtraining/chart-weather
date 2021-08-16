import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import App from './App'
import axios from 'axios'
import { mockDataTest } from './api/mockData'
import { act } from 'react-dom/test-utils'

jest.mock('axios')

describe('User action', () => {
    test('should display the title, temperature and humidity when user click select location', async () => {
        const clickValue = 'Singapore'
        axios.get = jest.fn().mockResolvedValueOnce(mockDataTest)
        const { getByTestId, getByText } = render(<App />)

        act(() => {
            fireEvent.change(getByTestId('select'), {
                target: { value: clickValue }
            })
        })

        await waitFor(() => {
            expect(getByText(/Rain/, { selector: '.highlight-text' })).toBeInTheDocument()
            expect(getByText(/30/, { selector: '.highlight-temperature' })).toBeInTheDocument()
            expect(getByText(/80/, { selector: '.highlight-humidity' })).toBeInTheDocument()

            expect(getByText(/30/, { selector: '.bg-number' })).toBeInTheDocument()
            expect(getByText(/4/, { selector: '.normal-number' })).toBeInTheDocument()
        })
    })

    test('should render error if there is a error', async () => {
        const errorMessage = 'Internal Server Error'
        axios.get = jest.fn().mockRejectedValue(new Error(errorMessage))
        await expect(axios.get()).rejects.toThrow(errorMessage)
    })
})
