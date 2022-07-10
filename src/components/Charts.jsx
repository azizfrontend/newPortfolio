import React from 'react'
import horizontal from'../image/horizontal.svg'
import { AreaChart,Area, Line, CartesianGrid, XAxis, YAxis,Tooltip, ResponsiveContainer  } from 'recharts';



const Charts = () => {
  const data = [
    {
      "name": "0",
      "uv": 4000,
      "pv": 2000,
      "amt": 2400
    },
    {
      "name": "1",
      "uv": 3000,
      "pv": 3098,
      "amt": 2210
    },
    {
      "name": "2",
      "uv": 2000,
      "pv": 3300,
      "amt": 2290
    },
    {
      "name": "3",
      "uv": 2780,
      "pv": 3808,
      "amt": 2000
    },
    {
      "name": "4",
      "uv": 1890,
      "pv": 3500,
      "amt": 2181
    },
    {
      "name": "5",
      "uv": 2390,
      "pv": 3400,
      "amt": 2000
    },
    {
      "name": "6",
      "uv": 3490,
      "pv": 4000,
      "amt": 2100
    },
    {
      "name": "7",
      "uv": 4390,
      "pv": 6500,
      "amt": 6000
    },
    {
      "name": "8",
      "uv":5090,
      "pv": 8000,
      "amt":8000
    },
    {
      "name": "9",
      "uv": 5490,
      "pv": 7000,
      "amt": 2100
    },
    {
      "name": "10",
      "uv": 3490,
      "pv": 3500,
      "amt": 2700
    },
    {
      "name": "11",
      "uv": 2000,
      "pv": 2800,
      "amt": 3200
    },
    {
      "name": "12",
      "uv": 2690,
      "pv": 2700,
      "amt":3800
    },
    {
      "name": "13",
      "uv": 3490,
      "pv": 3500,
      "amt":3900
    },
    {
      "name": "14",
      "uv": 3490,
      "pv": 4000,
      "amt": 2100
    },
    {
      "name": "15",
      "uv": 4490,
      "pv": 5000,
      "amt": 2100
    },
    {
      "name": "16",
      "uv": 6090,
      "pv": 7500,
      "amt": 2100
    },
    {
      "name": "17",
      "uv": 6490,
      "pv": 7300,
      "amt": 2100
    },
    {
      "name": "18",
      "uv": 5890,
      "pv": 7200,
      "amt": 2100
    },
    {
      "name": "19",
      "uv": 5890,
      "pv": 6800,
     
      "amt": 2100
    },
    {
      "name": "20",
      "uv": 4890,
      "pv": 6000,
     
      "amt": 2100
    },
    {
      "name": "21",
      "uv": 4090,
      "pv": 5500,
      "amt": 4500
    },
    {
      "name": "22",
     
      "uv": 4290,
      "pv": 4500,
      "amt": 4000
    }
  ]
  
  
  return (
    <div className='chart'>
     
      <h1>Today’s trends</h1>
      <div className="date">
        <p>as of 25 May 2019, 09:41 PM</p>
        <div className="days">
          <img src={horizontal} alt="divader" /> <span>Today</span>
          <img src={horizontal} alt="divader" /> <span>Yesterday</span>
        </div>
      </div>
     <ResponsiveContainer height={300}>
      <AreaChart width={730} height={440} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="30%" stopColor="#8884d8" stopOpacity={0.2}/>
      <stop offset="75%" stopColor="#ff9bff81" stopOpacity={0.3}/>
      <stop offset="98%" stopColor="#fff" stopOpacity={0.1}/>

    </linearGradient>
    <linearGradient id="colorPv" x1="1" y1="5" x2="0" y2="4">
      <stop offset="55%" stopColor="#dfeoeb" stopOpacity={0.4}/>
      <stop offset="95%" stopColor="#3751FF" stopOpacity={0.2}/>
      <stop offset="95%" stopColor="#3751FF" stopOpacity={0.2}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={0.4} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#ff9bff81" fillOpacity={0.8} fill="url(#colorPv)" />
</AreaChart>
</ResponsiveContainer>
    
    </div>
  )
}

export default Charts
