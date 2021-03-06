import React, { useState, useMemo, useCallback } from "react";

const getAverage = (nums) => {
  console.log("loading . . . ");

  if (nums.length === 0) {
    return 0;
  }
  const sum = nums.reduce((a, b) => a + b);
  console.log(" sum / nums.length > ", sum / nums.length);
  return sum / nums.length;
};

const Average_2 = () => {
  const [list, setList] = useState([]);
  const [num, setNum] = useState("");

  const Change = useCallback((e) => {
    setNum(e.target.value);
  }, []);

  const Calculate = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(num));
      console.log("nextList > ", nextList);
      setList(nextList);
      setNum("");
    },
    [num, list]
  );

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={num} onChange={Change} />
      <button onClick={Calculate}>계산</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <>
        <b>AVERAGE :{avg}</b>
      </>
    </div>
  );
};

export default Average_2;
