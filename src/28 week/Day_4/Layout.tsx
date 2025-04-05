import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <h1>Home</h1>
      </header>

      <Layout />

      <footer>
        <h1>2021</h1>
      </footer>
    </>
  );
}
