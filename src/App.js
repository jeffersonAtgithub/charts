import React from 'react'
import './App.css'
import CustomBarChart from './CustomBarChart'
// import CustomPieChart from './CustomPieChart'

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
    { name: 'Critical', value: 40, color: '#FF56DD' },
    { name: 'Outstanding', value: 20, color: '#8D5EAA' },
    { name: 'Covered', value: 30, color: '#FF9718' },
    { name: 'Open Items', value: 30, color: '#3C6FFF' },
    { name: 'Closed Items', value: 50, color: '#9EEA00' }
  ]

  return (
    <div className='App'>
      <CustomBarChart
        data={barData}
        colors={barColors}
        xDataKey='name'
        width={400}
        height={300}
        margin={{
          top: 100, right: 30, left: 20, bottom: 5,
        }}
        barCategoryGap='20%'
      />
      {/* <CustomPieChart
        data={pieData}
        cx={150}
        cy={150}
        labelLine={false}
        outerRadius={100}
        paddingAngle={2}
        dataKey='value'
      /> */}
    </div>
  )
}

export default App
