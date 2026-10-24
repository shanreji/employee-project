
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import EmployeeForm from "./EmployeeForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>

      <footer className="text-center py-3 mt-4 bg-light">
        <p className="mb-0">
          Employee Dashboard | React Project
        </p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
