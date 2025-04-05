import React from "react";
import Layout from "./Layout";
import Protected from "./Protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} />

          <Route element={<Protected />}>
            <Route path="/about" element={<Aiau_Acc />} />
            <Route path="/contact" element={<Diko_Acc />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}
function Aiau_Acc() {
  return <h1>Instagram Aiaulym</h1>;
}
function Diko_Acc() {
  return <h1>Instagram Dilnaz</h1>;
}
