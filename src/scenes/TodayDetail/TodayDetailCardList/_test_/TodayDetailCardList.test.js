import React from 'react'
import renderer from 'react-test-renderer'
import TodayDetailCardList from '../TodayDetailCardList'

describe('snapshot testing', () => {
    test('snapshot for today detail card_list component', () => {
        const renderedComponent = renderer.create(<TodayDetailCardList/>).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
