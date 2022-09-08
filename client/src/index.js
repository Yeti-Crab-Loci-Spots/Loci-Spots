import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Context from "./Context";
// import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Context>
            <App />
        </Context>
    </React.StrictMode>
);

