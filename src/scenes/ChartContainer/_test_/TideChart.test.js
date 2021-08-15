import React from 'react'
import renderer from 'react-test-renderer'
import TideChart from '../TideChart'

describe('snapshot testing', () => {
    test('snapshot for tide chart component', () => {
        const renderedComponent = renderer.create(<TideChart/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
