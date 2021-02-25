import { cleanup } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import "./Info.css";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const changeName = (e) => {
    console.log("=========== useState()");
    setName(e.target.value);
  };
  const changeNickname = (e) => {
    console.log("=========== useState()");
    setNickname(e.target.value);
  };

  useEffect(() => {
    console.log("=========== useEffect()");
    console.log("name:" + name);

    return () => {
      console.log("cleanup()");
      cleanup();
    };
  }, [name]);
  //처음 rendering 될때만  실행하려면 두번째 파라미터로 빈 배열을 넣어줍니다.
  // 두번째 파라미터에 특정 값을 넣어주면, 그 값이 변할때마다 실행됩니다.

  return (
    <div>
      <p className="class">
        <hr />
        <input value={name} onChange={changeName} placeholder="name" required />
        <input
          value={nickname}
          onChange={changeNickname}
          placeholder="nickname"
        />
        <br />
        <hr />
        <p>
          NAME : <b>{name}</b>
          <br />
          NICKNAME : <b>{nickname}</b>
          <br />
        </p>
      </p>
    </div>
  );
};

export default Info;
