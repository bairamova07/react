import React from "react";
import Teacher from "./Teacher";

const Curator = (p) => {
  return (
    <div className="box">
      <div>Curator</div>
      <Teacher get={p.info} />
    </div>
  );
};

export default Curator;
