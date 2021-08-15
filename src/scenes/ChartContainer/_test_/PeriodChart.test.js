import React from 'react'
import renderer from 'react-test-renderer'
import PeriodChart from '../PeriodChart'

describe('snapshot testing', () => {
    test('snapshot for period chart component', () => {
        const renderedComponent = renderer.create(<PeriodChart/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
