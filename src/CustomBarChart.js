import React, { PureComponent } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts'

class CustomBarChart extends PureComponent {

  render() {
    const {
      data,
      colors = [],
      xDataKey = 'name',
      showDefaultTooltip = true,
      showCustomTooltip = false,
      ...rest
    } = this.props
    return (
      <>
        {
          showCustomTooltip
          && (
            <div className='custom-tooltip' style={{ width: '500px', textAlign: 'left', display: 'flex', color: '#FFFFFF', backgroundColor: '#000000' }}>
              {
                data.map(each => {
                  const eachData = Object.entries(each)
                  return (
                    <div>
                      {
                        eachData.map(([key, val]) => {
                          return key === 'name'
                            ? <div>{val}</div> 
                            : (
                              <div>
                                <span style={{ padding: '2px', backgroundColor: colors[key] }}>{val}</span>
                                <span>{key}</span>
                              </div>
                            )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          )
        }
        <BarChart
          data={data}
          {...rest}
        >
          <CartesianGrid strokeDasharray='5 5' />
          <XAxis dataKey={xDataKey} />
          {
            showDefaultTooltip
            && <Tooltip />
          }
          <YAxis />
          {
            Object.entries(colors).map(([key, value]) => (
              <Bar key={key} dataKey={key} fill={value} />
            ))
          }
        </BarChart>
      </> 
    )
  }
}

export default CustomBarChart
