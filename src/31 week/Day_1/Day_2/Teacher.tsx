import React, { createContext } from "react";
import UserContext from "./I";

const info = createContext(UserContext);

const Teacher = (props) => {
  return (
    <div className="box">
      <div>Gulaida {props.info}</div>
    </div>
  );
};

export default Teacher;
