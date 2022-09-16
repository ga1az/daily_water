import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Settings } from "./pages";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
