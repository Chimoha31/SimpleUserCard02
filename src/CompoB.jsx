import React, { useContext } from 'react';
import { userCount } from './Context';


const CompoB = () => {
const {count, setCount} = useContext(userCount);
  return (
    <div>
      <p>CompoB</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
    </div>
  )
}

export default CompoB
