import React from "react";
import Curator from "./Curator"

const Mom = (p) => {
  return (
    <div className="box">
      <div>Mom</div>
      <Curator get={p.info} />
    </div>
  );
};


export default Mom