import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppStore } from "../types";
import Home from "../components/Home";
import LoginIn from "../components/login/Login";
import AppFooter from "../components/AppFooter";
import { AppHeaderContainer as AppHeader } from "../containers/AppHeaderContainer";
import { AddNew } from "../components/login/AddNew";

// const isDevelopEnv: boolean = process.env.NODE_ENV === "development";
const App: React.FC = () => {
  const isLogged: boolean = useSelector<AppStore, boolean>(
    ({ user }: AppStore) => user.login.isLogged
  );
  const ProtectedRoute = ({ children }: any) => {
    if (isLogged) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    // <AppHeader />
    // <AppFooter />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="login" >
              <Route index element={<LoginIn />} />
              <Route path="addNew" element={<AddNew />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;
