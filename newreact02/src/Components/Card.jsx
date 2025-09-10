import React, { useState } from 'react'

const Card = () => {
    const [count,setcount]=useState(0);
    const[theme,changeTheme]=useState("light")
  return (
    <div>
        <button onClick={()=>{ if(theme=="light"){changeTheme("dark")} else{changeTheme("light")}}}>Change theme Current theme is {theme}</button>
        <button onClick={()=>{setcount(count+1)}}>Click Me </button>
      <h1>Count CLicked {count} times</h1>
    </div>
  )
}

export default Card
