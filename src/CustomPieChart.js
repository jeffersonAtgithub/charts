import React, { PureComponent } from 'react'
import {
  PieChart, Pie, Cell, Sector, Tooltip
} from 'recharts'

class CustomPieChart extends PureComponent {

  render() {
    const {
      data,
      width,
      height,
      showDefaultTooltip = true,
      showCustomTooltip = false,
      ...rest
    } = this.props

    const RADIAN = Math.PI / 180
    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index, value
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.7
      const x = cx + radius * Math.cos(-midAngle * RADIAN)
      const y = cy + radius * Math.sin(-midAngle * RADIAN)
    
      return (
        <text x={x} y={y} fill='white' textAnchor='middle' dominantBaseline='central'>
          {value}
        </text>
      )
    }

    const renderActiveShape = (props) => {
      const { outerRadius, cx, cy, startAngle, endAngle, fill } = props
      return (
        <g>
          <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            outerRadius={outerRadius + 10}
            fill={fill}
          />
        </g>
      )
    }

    return (
      <>
        {
          showCustomTooltip
          && (
            <div className='custom-tooltip' style={{ width: '200px', textAlign: 'left', color: '#FFFFFF', backgroundColor: '#000000' }}>
              {
                data.map(({ name, color, value }) => (
                  <div>
                    <span style={{ padding: '2px', backgroundColor: color }}>{value}</span>
                    <span>{name}</span>
                  </div>
                ))
              }
            </div>
          )
        }
        <PieChart width={width} height={height}>
          {
            showDefaultTooltip
            && <Tooltip />
          }
          <Pie
            data={data}
            label={renderCustomizedLabel}
            activeShape={renderActiveShape}
            {...rest}
            activeIndex={[1,2,5]}
          >
            {
              data.map(({ color }, index) => <Cell strokeWidth={0} key={`cell-${index}`} fill={color} />)
            }
          </Pie>
        </PieChart>
      </>
    )
  }
}

export default CustomPieChart
