import React, { useEffect } from 'react'
import './chart.scss'
import * as d3 from 'd3'
<script src="https://d3js.org/d3.v4.min.js" charset="utf-8"></script>

export const Chart = (props) => {
    useEffect(() => {
        var Svg = d3.select(".svgchart")
            .append("svg")
        var g = Svg.append("g")
            .attr('class', 'weather-container')
        var x = d3.scalePoint()
            .domain(((props.chartData).map(function (d) { return d.hour })))
        var y = d3.scaleLinear()
            .domain([0, 3])
        var xAxis = g.append("g")
            .style('color', '#000')
        var yAxis = g.append("g")
        var lineSunColor = 'orange'

        var lineTidePath = d3.area()
            .x(function (d) { return x(d.hour) })
            .y(function (d) { return y(d.tide) })
            .curve(d3.curveBumpX),
            lineSunPath = d3.area()
                .x(function (d) { return x(d.hour) })
                .y(function (d) { return y(d.sun) })
                .curve(d3.curveMonotoneX)

        const lineTideMain = () => {
            g.append('path')
                .data([(props.chartData)])
                .attr('class', 'line-tide')
                .style("stroke", '#0affe840')
                .attr('d', lineTidePath)
        }
        const lineSunMain = () => {
            g.append('path')
                .data([(props.chartData)])
                .attr('class', 'line-sun')
                .style("stroke", lineSunColor)
                .style("stroke-width", '2px')
                .style("fill", 'none')
                .attr('d', lineSunPath)
        }
        const lineRemove = () => {
            g.selectAll('path')
                .data([(props.chartData)])
                .exit()
                .remove('path')
        }

        const drawChart = () => {
            const currentWidth = parseInt(d3.select('.svgchart').style('width'), "100%")
            const currentHeight = parseInt(d3.select('.svgchart').style('height'), "100%")
            Svg.attr("width", currentWidth * 6)
                .attr('height', currentHeight)
            x.range([0, currentWidth * 6])
            xAxis.call(d3.axisBottom(x).ticks(2)).attr("transform", `translate(0,${currentHeight - 20})`)
            y.range([currentHeight - 20, 0]);
            yAxis.call(d3.axisLeft(y))
            var area = d3.area()
                .x(function (d) { return x(d.hour); })
                .y0(currentHeight - 20)
                .y1((function (d) { return y(d.tide); }))
                .curve(d3.curveBumpX)

            g.append('path')
                .data((props.chartData))
                .attr('class', 'area')
                .attr('d', area((props.chartData)))
                .attr('fill', '#0affe840')
            lineTideMain()
            lineSunMain()
            //replace
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d?.hour) })
                .attr("y", function (d) { return y(d?.tide) })
                .attr("width", currentWidth / 2)
                .attr("height", 0)
                .style("fill", 'gray')
                .style("opacity", 0.3)
                .attr("transform", `translate(0,${0})`)
            //rect
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor')
                .attr('x', function (d) { return x(d[0]?.hour) })
                .attr("y", function (d) { return y(d[0]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor_tidemax')
                .attr('x', function (d) { return x(d[1]?.hour) })
                .attr("y", function (d) { return y(d[1]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor')
                .attr('x', function (d) { return x(d[2]?.hour) })
                .attr("y", function (d) { return y(d[2]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor_tidemax')
                .attr('x', function (d) { return x(d[3]?.hour) })
                .attr("y", function (d) { return y(d[3]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor')
                .attr('x', function (d) { return x(d[4]?.hour) })
                .attr("y", function (d) { return y(d[4]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor_tidemax')
                .attr('x', function (d) { return x(d[5]?.hour) })
                .attr("y", function (d) { return y(d[5]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor')
                .attr('x', function (d) { return x(d[6]?.hour) })
                .attr("y", function (d) { return y(d[6]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor_tidemax')
                .attr('x', function (d) { return x(d[7]?.hour) })
                .attr("y", function (d) { return y(d[7]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor')
                .attr('x', function (d) { return x(d[8]?.hour) })
                .attr("y", function (d) { return y(d[8]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor_tidemax')
                .attr('x', function (d) { return x(d[9]?.hour) })
                .attr("y", function (d) { return y(d[9]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor')
                .attr('x', function (d) { return x(d[10]?.hour) })
                .attr("y", function (d) { return y(d[10]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor_tidemax')
                .attr('x', function (d) { return x(d[11]?.hour) })
                .attr("y", function (d) { return y(d[11]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor')
                .attr('x', function (d) { return x(d[12]?.hour) })
                .attr("y", function (d) { return y(d[12]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-infor_tidemax')
                .attr('x', function (d) { return x(d[13]?.hour) })
                .attr("y", function (d) { return y(d[13]?.tide) })
                .attr("width", 70)
                .attr("height", 50)

            //[0]moon
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[0]?.hour) })
                .attr("y", function (d) { return y(d[0]?.tide) })
                .attr("width", currentWidth / 2)
                .attr("height", currentHeight * 4)
                .style("fill", 'gray')
                .style("opacity", 0.3)
                .attr("transform", `translate(0,${currentHeight - currentHeight * 3})`)
            //[3],[4]
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[3]?.hour) })
                .attr("y", function (d) { return y(d[3]?.tide) })
                .attr("width", currentWidth / 2)
                .attr("height", currentHeight * 4)
                .style("fill", 'gray')
                .style("opacity", 0.3)
                .attr("transform", `translate(0,${currentHeight - currentHeight * 3})`)
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[4]?.hour) })
                .attr("y", function (d) { return y(d[4]?.tide) })
                .attr("width", currentWidth / 2)
                .attr("height", currentHeight * 4)
                .style("fill", 'gray')
                .style("opacity", 0.3)
                .attr("transform", `translate(0,${currentHeight - currentHeight * 3})`)
            //[7],[8]
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[7]?.hour) })
                .attr("y", function (d) { return y(d[7]?.tide) })
                .attr("width", currentWidth / 2)
                .attr("height", currentHeight * 4)
                .style("fill", 'gray')
                .style("opacity", 0.3)
                .attr("transform", `translate(0,${currentHeight - currentHeight * 3})`)
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[8]?.hour) })
                .attr("y", function (d) { return y(d[8]?.tide) })
                .attr("width", currentWidth / 2)
                .attr("height", currentHeight * 4)
                .style("fill", 'gray')
                .style("opacity", 0.3)
                .attr("transform", `translate(0,${currentHeight - currentHeight * 3})`)
            //[11],[12]
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[11]?.hour) })
                .attr("y", function (d) { return y(d[11]?.tide) })
                .attr("width", currentWidth / 2)
                .attr("height", currentHeight * 4)
                .style("fill", 'gray')
                .style("opacity", 0.3)
                .attr("transform", `translate(0,${currentHeight - currentHeight * 3})`)
            g.append('rect')
                .data(([props.chartData]))
                .attr("class", 'rect-line')
                .attr('x', function (d) { return x(d[12]?.hour) })
                .attr("y", function (d) { return y(d[12]?.tide) })
                .attr("width", currentWidth / 2)
                .attr("height", currentHeight * 4)
                .style("fill", 'gray')
                .style("opacity", 0.3)
                .attr("transform", `translate(0,${currentHeight - currentHeight * 3})`)
        }
        const rectRemove = () => {
            g.selectAll('rect')
                .data([(props.chartData)])
                .exit()
                .remove('rect')
        }
        const remove = () => {
            lineRemove()
            rectRemove()
        }
        drawChart()

        window.addEventListener('resize', remove)
        window.addEventListener('resize', drawChart)
    }, [])

    return (
        <div className='layout__container-chart'>
            <div className='svgchart'></div>
            <div className='layout__container-chart--title'>
                <span className='blue-title'>Tide •</span>
                <span className='orange-title'>Sunrise &amp; Sunset</span>
            </div>

        </div>
    )
}

export default Chart
