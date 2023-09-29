import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/products/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
