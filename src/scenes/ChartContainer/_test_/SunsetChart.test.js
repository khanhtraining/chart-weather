import React from 'react'
import renderer from 'react-test-renderer'
import SunsetChart from '../SunsetChart'

describe('snapshot testing', () => {
    test('snapshot for sunset chart component', () => {
        const renderedComponent = renderer.create(<SunsetChart/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
