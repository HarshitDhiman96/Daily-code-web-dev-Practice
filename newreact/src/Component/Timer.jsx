import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[time,settime]=useState(0);
    useEffect(()=>{
         const interval=setInterval(() => {
            console.log("start");
            settime(time=>time+1)
        }, 1000);
        return()=>{
            console.log("stopped");
            clearInterval(interval);
        };
    }, [])
  return (
    <div>
        <p>Count:{time}</p>
    </div>
  )
}

export default Timer
