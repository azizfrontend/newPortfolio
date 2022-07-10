import React from 'react'
import LeftCard from './LeftCard'
import RightCard from './RightCard'

const BottomCards = () => {
  return (
    <div className='cards-wrapper'>
     <div className="left-card"> <LeftCard/></div> 
   

      <div className="right-card"> <RightCard/></div>
   
     
    </div>
  )
}

export default BottomCards
