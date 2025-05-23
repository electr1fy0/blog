// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecondBrain from "./pages/SecondBrain";
import Year1 from "./pages/Year1";
import Navigation from "./components/Navigation";

function App() {
  return (
    <main className="w-full max-w-3xl mx-auto px-1">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second-brain" element={<SecondBrain />} />
        <Route path="/first-year" element={<Year1 />} />
      </Routes>
    </main>
  );
}

export default App;
