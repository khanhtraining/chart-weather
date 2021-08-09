import React, { useEffect, useRef } from 'react'
import { select } from 'd3'
import * as d3 from 'd3'

const SunriseChart = (props) => {
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
        data.filter(function (d) {
            if (d.sun === 0) {
                g.append('rect')
                    .data(([data]))
                    .attr("class", 'rect-line')
                    .attr('x', x(d?.hour))
                    .attr("y", y(d?.tide))
                    .attr("width", width / 12)
                    .attr("height", height * 4)
                    .attr("transform", `translate(0,${height - height * 3})`)
            }
            return true
        })
    }, [width, height, data, x, y])

    return (
        <g className='sunrise-chart' ref={ref} />
    )
}

export default SunriseChart
