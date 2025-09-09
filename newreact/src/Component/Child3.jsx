import React, { useContext } from 'react'
import { UserContext } from '../App';

const Child3 = () => {
    const user=useContext(UserContext);
  return (
    <div>
      {user.names}
    </div>
  )
}

export default Child3
