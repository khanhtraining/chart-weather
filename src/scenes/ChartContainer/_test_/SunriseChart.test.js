import React from 'react'
import renderer from 'react-test-renderer'
import SunriseChart from '../SunriseChart'

describe('snapshot testing', () => {
    test('snapshot for sunrise chart component', () => {
        const renderedComponent = renderer.create(<SunriseChart/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
