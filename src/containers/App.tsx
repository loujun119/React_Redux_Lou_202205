import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import LoginIn from "../components/LoginIn";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

// const isDevelopEnv: boolean = process.env.NODE_ENV === "development";
const App: React.FC = () => (
  <>
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginIn />} />
      </Routes>
      <AppFooter />
    </Router>
  </>
);

export default App;
