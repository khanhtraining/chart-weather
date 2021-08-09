import React, { useEffect, useRef } from 'react'
import { select } from 'd3'
import { getXYAxis } from './utils'
import './chart.scss'

const PeriodChart = (props) => {
    const ref = useRef()
    const { width, height, data } = props

    useEffect(() => {
        const { x, y } = getXYAxis(data, width, height)
        const g = select(ref.current)

        data.forEach(d => g.append('rect')
            .datum(data)
            .attr('x', x(d.hour))
            .attr('y', y(d.tide))
            .attr("class", 'rect-info'))

        data.forEach(d => g.append('text')
            .datum(data)
            .attr("class", 'text-info_hour')
            .attr('x', x(d.hour))
            .attr('y', y(d.tide))
            .text(d.hour))

        data.forEach(d => g.append('text')
            .datum(data)
            .attr("class", 'text-info_tide')
            .attr('x', x(d.hour))
            .attr('y', y(d.tide))
            .text(d.tide + `m`))

    }, [width, height, data])

    return (
        <g className='period-chart' ref={ref} />
    )
}

export default PeriodChart
