import React from 'react'
import './Parent.scss';
import Child from '../child/Child';
import {items} from "../skillBardata"

const Parent = () => {
  return (

    <>
    
    <div className='parent-container'>
      {items.map((item)=>(
        <Child key={item.id}
        icon={item.icons}
        skill={item.skill}
        percentage={item.percentage}
        />
      ))}
      
    </div>
    </>
  )
}

export default Parent
