import { render, screen } from '@testing-library/react'
import TodayDetailCard from '../TodayDetailCards/TodayDetailCard'
test('has correct TodayDetailCard text', () => {
    render(<TodayDetailCard title='PSI' />)
    expect(screen.getByRole('title')).toHaveTextContent('PSI')
})
