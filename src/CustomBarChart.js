import React, { PureComponent } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts'

class CustomBarChart extends PureComponent {

  render() {
    const { data, colors, xDataKey = 'name', ...rest } = this.props
    return (
      <BarChart
        data={data}
        {...rest}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        {
          Object.entries(colors).map(([key, value]) => (
            <Bar key={key} dataKey={key} fill={value} />
          ))
        }
      </BarChart>
    );
  }
}

export default CustomBarChart
