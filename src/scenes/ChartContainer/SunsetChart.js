import React, { useLayoutEffect, useRef } from 'react'
import { select } from 'd3'
import * as d3 from 'd3'

const SunsetChart = (props) => {
    const ref = useRef()
    const { width, height, data } = props
    const x = d3.scalePoint()
        .domain(((data).map(function (d) { return d.hour })))
        .range([0, width])
    const y = d3.scaleLinear()
        .domain([0, 3])
        .range([height, 0])

    useLayoutEffect(() => {
        const g = select(ref.current)
        const drawSunSetChart = () => {
            const lineSunPath = d3.area()
                .x(function (d) { return x(d.hour) })
                .y(function (d) { return y(d.sun) })
                .curve(d3.curveMonotoneX)
            g.append('path')
                .data([(data)])
                .attr('class', 'line-sun')
                .style("stroke", 'orange')
                .style("stroke-width", '2px')
                .style("fill", 'none')
                .attr('d', lineSunPath)
        }

        const lineRemove = () => {
            g.selectAll('path')
                .data([(data)])
                .exit()
                .remove('path')
        }

        drawSunSetChart()
        window.addEventListener('resize', lineRemove)
        window.addEventListener('resize', drawSunSetChart)
        drawSunSetChart()

    }, [width, height, data])

    return (
        <g className='weather-container' ref={ref} />
    )
}

export default SunsetChart
