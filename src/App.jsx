// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecondBrain from "./pages/SecondBrain";
import Navigation from "./components/Navigation";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="md:w-xl  w-md">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/second-brain" element={<SecondBrain />} />
      </Routes>
    </main>
  );
}

export default App;
