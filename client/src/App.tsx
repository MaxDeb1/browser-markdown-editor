// import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

import Sidebar from "./components/Sidebar/Sidebar";
import useMenuStore from "./lib/store";

function App() {
  const isMenuOpen = useMenuStore((state) => state.isOpen)

  return (
    <>
      <Sidebar />
      <section className={`container ${isMenuOpen ? "menuOpen" : ""}`}>
        <Header />

      </section>
    </>
  );
}

export default App;
