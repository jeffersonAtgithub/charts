import React from 'react'
import './App.css'
import CustomBarChart from './CustomBarChart'
import CustomPieChart from './CustomPieChart'

function App() {
  const barData = [
    {
      name: 'Windows/Door/PrelimWP', 'Manufacturer': 1, 'Plan/Spec': 5, 'Field Quality': 8, 'Total': 14, 
    },
    {
      name: 'EWB', 'Manufacturer': 5, 'Plan/Spec': 2, 'Field Quality': 6, 'Total': 13, 
    },
    {
      name: 'FB/DS', 'Manufacturer': 2, 'Plan/Spec': 1, 'Field Quality': 4, 'Total': 7, 
    }
  ]
  const barColors = {
    'Manufacturer': '#AB1604',
    'Plan/Spec': '#FF2075',
    'Field Quality': '#CC3F0E',
    'Total': '#FF2AFF'
  }

  const pieData = [
    { name: 'Covered', value: 8, color: '#FF9718', index: 0 },
    { name: 'Outstanding', value: 3, color: '#8D5EAA', index: 1 },
    { name: 'Critical', value: 5, color: '#FF56DD', index: 2 },
    { name: 'Closed Items', value: 40, color: '#9EEA00', index: 3 },
    { name: 'Open Items', value: 28, color: '#3C6FFF', index: 4 },
    { name: 'Ambot Unsa ni', value: 16, color: '#FDE42C', index: 5 }
  ]

  return (
    <div className='App'>
      <CustomBarChart
        data={barData}
        colors={barColors}
        xDataKey='name'
        barCategoryGap='20%'
        width={400}
        height={300}
        margin={{
          top: 100, right: 30, left: 20, bottom: 5,
        }}
        showDefaultTooltip={false}
        showCustomTooltip={true}
      />
      <CustomPieChart
        data={pieData}
        cx={150}
        cy={150}
        width={400}
        height={400}
        labelLine={false}
        outerRadius={100}
        showDefaultTooltip={false}
        showCustomTooltip={true}
        dataKey='value'
      />
    </div>
  )
}

export default App
