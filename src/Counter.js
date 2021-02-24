import React, { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h1> C O U N T E R </h1>
      <p>
        COUNTER VALUE : <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}> +1</button>
      <button onClick={() => setValue(value - 1)}> -1</button>
    </div>
  );
};

export default Counter;
