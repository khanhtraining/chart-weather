import React, { useEffect, useRef } from 'react'
import { select } from 'd3'
import * as d3 from 'd3'
import { getXYAxis } from './utils'

const SunsetChart = (props) => {
    const ref = useRef()
    const { width, height, data } = props

    useEffect(() => {
        const { x, y } = getXYAxis(data, width, height)
        const g = select(ref.current)

        const lineSunPath = d3.area()
            .x(d => x(d.hour))
            .y(d => y(d.sun))
            .curve(d3.curveMonotoneX)
        g.append('path')
            .datum(data)
            .attr('class', 'line-sun')
            .style("stroke", 'orange')
            .style("stroke-width", '2px')
            .style("fill", 'none')
            .attr('d', lineSunPath)
    }, [width, height, data])

    return (
        <g className='sunset-chart' ref={ref} />
    )
}

export default SunsetChart
