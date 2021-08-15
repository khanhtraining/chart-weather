import React from 'react'
import renderer from 'react-test-renderer'
import TodayDetailAdd from '../TodayDetailAdd'

describe('snapshot testing', () => {
    test('snapshot for today detail add component', () => {
        const renderedComponent = renderer.create(<TodayDetailAdd/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
