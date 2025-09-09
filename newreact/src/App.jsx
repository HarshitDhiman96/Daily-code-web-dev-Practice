
import { createContext, useState } from 'react'
import './App.css'
import Child1 from './Component/Child1'
// import { useEffect } from 'react'

const UserContext=createContext();
function App() {
  const[names,setNames]=useState({names:"harshit dhiman"})
return(
  <div>
    <UserContext.Provider value={names}>
        <Child1/>
    </UserContext.Provider>
  </div>
);
}

export default App
export {UserContext}
