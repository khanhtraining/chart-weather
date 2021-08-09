import React, { useEffect, useRef } from 'react'
import { select } from 'd3'
import * as d3 from 'd3'

const PeriodChart = (props) => {
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
        data.map(function (d) {
            g.append('rect')
                .data(([data]))
                .attr('x', x(d.hour))
                .attr('y', y(d.tide))
                .attr("class", 'rect-infor')
            return true
        })
        data.map(function (d) {
            g.append('text')
                .data(([data]))
                .attr("class", 'text-infor_hour')
                .attr('x', x(d.hour))
                .attr('y', y(d.tide))
                .text(d.hour)
            return true
        })

        data.map(function (d) {
            g.append('text')
                .data(([data]))
                .attr("class", 'text-infor_tide')
                .attr('x', x(d.hour))
                .attr('y', y(d.tide))
                .text(d.tide + `m`)
            return true
        })
    }, [width, height, data, x, y])

    return (
        <g className='period-chart' ref={ref} />
    )
}

export default PeriodChart
