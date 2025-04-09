import React, { useState } from "react";
import Mom from "./Mom";
import { createContext } from "react";
import Teacher from "./Teacher";

export const userContext = createContext("");

const I = () => {
  // const [info, setInfo] = useState("I get sick");
  const info = "I get sick";
  return (
    <div className="box">
      <div>I get sick</div>
      <userContext.Provider value={info}>
        <Teacher />
      </userContext.Provider>
    </div>
  );
};

export default I;
