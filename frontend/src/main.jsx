<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
=======
console.log("🚀 Vite entry loaded");


import React from "react";
import ReactDOM from "react-dom/client";  // ensure it’s "react-dom/client"
import App from "./App";
import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")        // must match the div id above
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
>>>>>>> e5e6787 (Login and SignUp)
