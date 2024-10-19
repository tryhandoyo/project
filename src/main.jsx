import { createRoot } from 'react-dom/client'

// import file App.jsx
import App from "./App.jsx";

// import library react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import library react router dom
import { BrowserRouter } from "react-router-dom";

import './css/style.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
