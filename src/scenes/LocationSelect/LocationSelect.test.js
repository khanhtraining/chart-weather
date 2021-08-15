import React from 'react'
import LocationSelect from './LocationSelect'
import renderer from 'react-test-renderer'

describe('snapshot testing', () => {
    test('snapshot for Location Select component', () => {
        const renderedComponent = renderer.create(<LocationSelect />).toJSON()
        expect(renderedComponent).toMatchSnapshot()
    })
})
