import React, { useEffect, useRef } from 'react'
import { select } from 'd3'
import * as d3 from 'd3'

const TideChart = (props) => {
    const ref = useRef()
    const { width, height, data } = props
    const x = d3.scalePoint()
        .domain(((data).map(function (d) { return d.hour })))
    const y = d3.scaleLinear()
        .domain([0, 3])
    x.range([0, width])
    y.range([height, 0])

    useEffect(() => {
        const g = select(ref.current)
        const area = d3.area().x(function (d) { return x(d.hour) })
            .y0(height).y1((function (d) { return y(d.tide) }))
            .curve(d3.curveBumpX)

        g.append('path')
            .datum((data))
            .attr('class', 'areaTide')
            .attr('d', area((data)))
            .attr('fill', '#0affe840')
    }, [width, height, data, x, y])

    return (
        <g className='tide-chart' ref={ref} />
    )
}

export default TideChart
