// import { Outlet, Navigate } from "react-router-dom";

// export default function Protected() {
//   const user = false;

//   return (
//     <>
//       <h1>It is Protected</h1>
//       {user ? <Outlet /> : <Navigate to="/ " />}
//     </>
//   );
// }

import { Outlet, Navigate } from "react-router-dom";

export default function Protected() {
  const user = true;

  return (
    <>
      <h1>It is Protected</h1>
      {user ? <Outlet /> : <Navigate to="/ " />}
    </>
  );
}
