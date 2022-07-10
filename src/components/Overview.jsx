
import React, { useState } from 'react'
import NavbarOver from './NavbarOver'
import Card from './Card'
import Data from './data'
import Charts from './Charts'
import ChartEnds from './ChartEnds'
import BottomCards from './BottomCards'

const Overview = () => {
  const [data, setData] = useState(Data);
  console.log(data);
  return (
    <div className='overview'>
      <NavbarOver title='Overview' />
      <div className='cards'> {
        data.map((v) => {
          console.log(v.number);
          return <Card key={v.id} title={v.title} number={v.number} />
        })
      }</div>
      <div className="charts-wrapper">
        <Charts />
        <div className="chartends-wrapper">
          <ChartEnds title='Resolved' number='449' />
          <ChartEnds title='Received' number='426' />
          <ChartEnds title='Average first response time' number='33m' />
          <ChartEnds title='Average response time' number='3h 8m' />
          <ChartEnds title='Resolution within SLA' number='94%' />
        </div>
      </div>
      <BottomCards />

    </div>
  )
}

export default Overview
