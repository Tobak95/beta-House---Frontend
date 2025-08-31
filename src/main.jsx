import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContext from "../src/context/AppContext.jsx";
import PropertyProvider from "./context/PropertyContext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PropertyProvider>
      <AppContext>
        <App />
        <ToastContainer position="top-center" />
      </AppContext>
    </PropertyProvider>
  </StrictMode>
);
