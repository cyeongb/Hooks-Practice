import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "PLUS":
      return { value: state.value + 1 };
    case "MINUS":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  console.log("state >", state);
  console.log("dispatch>", dispatch);
  return (
    <div>
      <h1> C O U N T E R 2</h1>
      <hr />
      <p>
        counter is <b>{state.value}</b>.
      </p>
      <button onClick={() => dispatch({ type: "PLUS" })}> +1 </button>
      <button onClick={() => dispatch({ type: "MINUS" })}>-1 </button>
    </div>
  );
};

export default Counter2;
