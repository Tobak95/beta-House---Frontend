import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import SuspenseLoader from "./component/layout/SuspenseLoader";
import ProtectedRoute from "./component/ProtectedRoutes";

const Homepage = lazy(() => import("./pages/Homepage"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const HomeLoggedInPage = lazy(() => import("./pages/HomeLoggedInPage"));

function App() {
  return (
    <Router>
      <Suspense fallback={<SuspenseLoader />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoute />} />
          <Route path="/home" element={<HomeLoggedInPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
