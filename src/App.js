import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import Home from "./Components/Pages/Home";
import Coconuts from "./Components/Pages/Coconuts";
import Groundnuts from "./Components/Pages/Groundnuts";
import Safflowers from "./Components/Pages/Safflowers";
import Turmerics from "./Components/Pages/Turmerics";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coconut" element={<Coconuts />} />
          <Route path="/groundnut" element={<Groundnuts />} />
          <Route path="/safflower" element={<Safflowers />} />
          <Route path="/turmeric" element={<Turmerics />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
