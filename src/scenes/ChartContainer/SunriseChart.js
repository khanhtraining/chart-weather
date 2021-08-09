import React, { useEffect, useRef } from 'react'
import { select } from 'd3'
import { getXYAxis } from './utils'

const SunriseChart = (props) => {
    const ref = useRef()
    const { width, height, data } = props

    useEffect(() => {
        const { x, y } = getXYAxis(data, width, height)
        const g = select(ref.current)

        data.forEach(d => {
            if (d.sun === 0) {
                g.append('rect')
                    .datum(data)
                    .attr("class", 'rect-line')
                    .attr('x', x(d?.hour))
                    .attr("y", y(d?.tide))
                    .attr("width", width / 12)
                    .attr("height", height * 4)
                    .attr("transform", `translate(0,${height - height * 3})`)
            }
        })
    }, [width, height, data])

    return (
        <g className='sunrise-chart' ref={ref} />
    )
}

export default SunriseChart
