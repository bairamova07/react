// import { useEffect, useState } from "react";

// const NewTask = () => {
//   //   useEffect(()=>{
//   //   },[])

//   const [count, setCount] = useState(0);

//   function add() {
//     setCount(count + 1);
//   }

//   useEffect(() => {
//     console.log("count ozgerdy: " + count);
//     // console.log("Aqparat jukteldi");
//   }, [count]);

//   return (
//     <div>
//       <button onClick={add}>+</button>
//     </div>
//   );
// };
// export default NewTask;

import { useEffect, useState } from "react";

const NewTask = () => {
  //   useEffect(()=>{
  //   },[])

  const [count, setCount] = useState(0);

  function add() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("Aqparat jukteldi");

    return () => {
      console.log("Aqparat joiyldy");
    };
  }, []);

  return (
    <div>
      <button onClick={add}>+</button>
    </div>
  );
};
export default NewTask;
