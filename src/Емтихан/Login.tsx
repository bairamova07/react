import "./style.css";
export { useState, useEffect } from "react";
export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Аты-жөніңізді енгізіңіз" />
      <input type="email" placeholder="Почтаңызды енгізіңіз" />
      <input type="pasword" placeholder="Құпиясөзіңізді енгізіңіз" />
      <button>Войти</button>
    </div>
  );
}
