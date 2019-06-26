import React, { PureComponent } from 'react'
import {
  PieChart, Pie, Cell, Sector
} from 'recharts'

class CustomPieChart extends PureComponent {

  render() {
    const { data, width, height, ...rest } = this.props
    const RADIAN = Math.PI / 180
    const renderCustomizedLabel = ({
      cx, cy, midAngle, innerRadius, outerRadius, percent, index, value
    }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.6
      const x = cx + radius * Math.cos(-midAngle * RADIAN) + 10
      const y = cy + radius * Math.sin(-midAngle * RADIAN) - 12
    
      return (
        <text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
          {value}
        </text>
      )
    }

    const renderActiveShape = (props) => {
      const { cx, cy, ...rest } = props
      return (
        <g>
          <Sector
            cx={cx + 6}
            cy={cy - 6}
            {...rest}
          />
        </g>
      )
    }

    return (
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          label={renderCustomizedLabel}
          {...rest}
          activeIndex={[1,2]}
          activeShape={renderActiveShape}
        >
          {
            data.map(({ color }, index) => <Cell d='' key={`cell-${index}`} fill={color} />)
          }
        </Pie>
      </PieChart>
    )
  }
}

export default CustomPieChart
