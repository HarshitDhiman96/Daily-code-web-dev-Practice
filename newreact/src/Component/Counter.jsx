import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count,setcount]=useState(0);
  return (
    <div>
      <button onClick={()=>{setcount(count+1)}} >Click Me</button>
       <p>you clicked {count} times</p>
    </div>
  )
}

export default Counter
