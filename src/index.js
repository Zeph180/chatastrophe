// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "../src/components/App"
// ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
//import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
