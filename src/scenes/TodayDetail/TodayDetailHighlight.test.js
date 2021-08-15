import React from 'react'
import renderer from 'react-test-renderer'
import TodayDetailHighlight from './TodayDetailHighlight'

describe('snapshot testing', () => {
    test('snapshot for today detail highlight component', () => {
        const renderedComponent = renderer.create(<TodayDetailHighlight/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
