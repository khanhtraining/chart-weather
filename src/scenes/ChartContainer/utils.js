import * as d3 from 'd3'

const getXYAxis = (data, width, height) => {
    const x = d3.scalePoint()
        .domain(data.map(d => d.hour))
    const y = d3.scaleLinear()
        .domain([0, 3])
    x.range([0, width])
    y.range([height, 0])
    return { x, y }
}

export {
    getXYAxis
}
