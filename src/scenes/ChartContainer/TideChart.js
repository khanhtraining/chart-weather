import React, { useEffect, useRef } from 'react'
import { select } from 'd3'
import * as d3 from 'd3'
import { getXYAxis } from './utils'
import './chart.scss'

const TideChart = (props) => {
    const ref = useRef()
    const { width, height, data } = props

    useEffect(() => {
        const { x, y } = getXYAxis(data, width, height)
        const g = select(ref.current)

        const area = d3.area()
            .x(d => x(d.hour))
            .y0(height)
            .y1(d => y(d.tide))
            .curve(d3.curveBumpX)
        g.append('path')
            .datum(data)
            .attr('class', 'areaTide')
            .attr('d', area(data))
            .attr('fill', '#0affe840')
    }, [width, height, data])

    return (
        <g className='tide-chart' ref={ref} />
    )
}

export default TideChart
