import TodayDetailAdd from "../TodayDetailCards/TodayDetailAdd"
import { render, screen } from '@testing-library/react'
test('has correct welcome text', () => {
    render(<TodayDetailAdd />)
    expect(screen.getByText('Add')).toHaveClass('add-text')
})
