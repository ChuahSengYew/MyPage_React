import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";
import Home from "./Home";
import { Router, hashHistory as history } from "react-router";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
