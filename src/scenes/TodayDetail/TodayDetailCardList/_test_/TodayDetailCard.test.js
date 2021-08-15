import React from 'react'
import renderer from 'react-test-renderer'
import TodayDetailCard from '../TodayDetailCard'

describe('snapshot testing', () => {
    test('snapshot for today detail card component', () => {
        const renderedComponent = renderer.create(<TodayDetailCard/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
