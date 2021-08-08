import React, { useLayoutEffect, useRef } from 'react'
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

    useLayoutEffect(() => {
        const g = select(ref.current)
        const drawRectSunRise = () => {
            g.append('rect')
                .data(([data]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[0]?.hour) })
                .attr("y", function (d) { return y(d[0]?.tide) })
                .attr("width", width / 12)
                .attr("height", height * 4)
                .attr("transform", `translate(0,${height - height * 3})`)
            g.append('rect')
                .data(([data]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[3]?.hour) })
                .attr("y", function (d) { return y(d[3]?.tide) })
                .attr("width", width / 12)
                .attr("height", height * 4)
                .attr("transform", `translate(0,${height - height * 3})`)
            g.append('rect')
                .data(([data]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[4]?.hour) })
                .attr("y", function (d) { return y(d[4]?.tide) })
                .attr("width", width / 12)
                .attr("height", height * 4)
                .attr("transform", `translate(0,${height - height * 3})`)
            g.append('rect')
                .data(([data]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[7]?.hour) })
                .attr("y", function (d) { return y(d[7]?.tide) })
                .attr("width", width / 12)
                .attr("height", height * 4)
                .attr("transform", `translate(0,${height - height * 3})`)
            g.append('rect')
                .data(([data]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[8]?.hour) })
                .attr("y", function (d) { return y(d[8]?.tide) })
                .attr("width", width / 12)
                .attr("height", height * 4)
                .attr("transform", `translate(0,${height - height * 3})`)
            g.append('rect')
                .data(([data]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[11]?.hour) })
                .attr("y", function (d) { return y(d[11]?.tide) })
                .attr("width", width / 12)
                .attr("height", height * 4)
                .attr("transform", `translate(0,${height - height * 3})`)
            g.append('rect')
                .data(([data]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[12]?.hour) })
                .attr("y", function (d) { return y(d[12]?.tide) })
                .attr("width", width / 12)
                .attr("height", height * 4)
                .attr("transform", `translate(0,${height - height * 3})`)
        }
        const lineRemove = () => {
            g.selectAll('rect')
                .data([(data)])
                .exit()
                .remove('rect')
        }
        drawRectSunRise()
        window.addEventListener('resize', lineRemove)
        window.addEventListener('resize', drawRectSunRise)
        drawRectSunRise()
    }, [width, height, data])

    return (
        <g className='weather-container' ref={ref}></g>
    )
}

export default SunriseChart
