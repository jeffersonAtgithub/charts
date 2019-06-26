import React, { PureComponent } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts'

class CustomBarChart extends PureComponent {

  render() {
    const { colors = [], xDataKey = 'name', ...rest } = this.props
    return (
      <BarChart
        {...rest}
      >
        <CartesianGrid strokeDasharray='5 5' />
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
