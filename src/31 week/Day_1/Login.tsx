

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Email қате");
      return;
    }
    if (password.length < 6) {
      setError("Құпиясөз 6 таңбадан ұзын болуы керек");
      return;
    }

    setError("");

    
    const mockBooks = [
      { id: 1, title: "Абай жолы" },
      { id: 2, title: "Қыз Жібек" },
    ];

    onLogin(mockBooks);
    navigate("/books"); // Сәтті тіркеуден кейін BookList бетіне өтеміз
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="example@mail.com"
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="******"
      />

      <button type="submit">Кіру</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default Login;
