import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LoginIn from "../components/LoginIn";

// const isDevelopEnv: boolean = process.env.NODE_ENV === "development";
const App: React.FC = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginIn />} />
      </Routes>
    </Router>
  </>
);

export default App;
