import React, { useState } from "react";
import Info from "./Info.js";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onMouseOver={() => setVisible(!visible)}>
        {visible ? "HIDE" : "SHOW"}
      </button>
      {visible && <Info />}
    </div>
  );
};

export default App;
