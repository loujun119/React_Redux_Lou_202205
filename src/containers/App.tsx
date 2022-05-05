import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import Home from "../components/Home";
import LoginIn from "../components/LoginIn";

// const isDevelopEnv: boolean = process.env.NODE_ENV === "development";
const App: React.FC = () => (
  <>
    <AppHeader />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginIn />} />
      </Routes>
    </Router>
    <AppFooter />
  </>
);

export default App;
