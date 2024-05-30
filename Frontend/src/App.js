import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FindStays from "./components/FindStays";
import ListPlace from "./components/ListPlace";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-page">
        <Routes>
          <Route path="/" element={<FindStays />} />
          <Route path="/list" element={<ListPlace />}/ >
          <Route path="/support" element={<Support />}/ >
        </Routes>
      </div>

    </div>
  );
}

export default App;
