import { render } from '@testing-library/react'
import App from './App'

const appContainer = () => render(<App />)
describe('App Container test', () => {
  test('renders app test', () => {
    const wrapper = appContainer()
    const titleDiv = wrapper.getByText('WIND SPEED')
    expect(titleDiv).toHaveClass('title')
  })
})
