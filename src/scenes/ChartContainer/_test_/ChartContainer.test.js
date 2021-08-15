import React from 'react'
import renderer from 'react-test-renderer'
import ChartContainer from '../ChartContainer'

describe('snapshot testing', () => {
    test('snapshot for chart container component', () => {
        const renderedComponent = renderer.create(<ChartContainer/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
