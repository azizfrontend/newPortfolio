import React, { useState } from 'react'
import Data from './data'

const Card = (p) => {
 
  return (
    <div>
      <div className="box">
        <h3>{p.title}</h3>
        <h1>{p.number}</h1>
      </div>
    </div>
  )
}

export default Card;
