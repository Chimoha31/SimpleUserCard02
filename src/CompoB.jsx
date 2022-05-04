import React, { useContext } from "react";
import { userCount } from "./Context";

const CompoB = () => {
  const {count, setCount} = useContext(userCount);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>CompoB</p>
      <p style={{color: "red", fontSize: "32px"}}>Number of Atinder {count}</p>
      <button onClick={handleClick}>Add number+1</button>
    </div>
  );
};

export default CompoB;
