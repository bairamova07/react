// import  { useState } from "react";

// const Day_1 = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!email.includes("@")) {
//       setError("Email қате");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Passeord 6-дан ұзын болуы керек");
//       return;
//     }
//     setError("");
//     alert("Форма сатті өтті ");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Email:</label>
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label>Password</label>
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button type="submit">Kiru</button>
//       {error && <p style={{ color: "red " }}>{error}</p>}
//     </form>
//   );
// };

// export default Day_1;
import { useState } from "react";

const Day_1 = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  function handleSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Email қате");
      return;
    }
    if (password.length < 6) {
      setError("Passeord 6-дан ұзын болуы керек");
      return;
    }
    setError("");
    alert("Форма сатті өтті ");
  }
  if (numbers.) {
    setError("Аты-жөніңізде қате бар");
    return;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Kiru</button>
      {error && <p style={{ color: "red " }}>{error}</p>}
      <label>UserName:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
};

export default Day_1;
