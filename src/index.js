import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./navigation.js";
import Home from "./home.js";
import NoPage from "./noPage.js";
import Eductaion from "./education.js";
import Skills from "./Skills.js";
import "./style.css"

function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route path="lib/index.html" element={<Home />} />
                    <Route path="lib/eductaion" element={<Eductaion />} />
                    <Route path="lib/Skills" element={<Skills />} />
                    
                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    )
}

const element = document.getElementById("root");
const root = createRoot(element);
root.render(<App />);
