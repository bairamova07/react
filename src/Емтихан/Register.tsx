import "./style.css";
export { useState, useEffect } from "react";
export default function Exam() {
  return (
    <div className="div">
      <h1>Register</h1>
      <input type="text" placeholder="Аты-жөніңізді енгізіңіз..." />
      <input type="email" placeholder="Почтаңызды енгізіңіз..." />
      <input type="pasword" placeholder="Құпиясөз еңгізіңіз..." />
      <button>Отправить</button>
    </div>
  );
}
