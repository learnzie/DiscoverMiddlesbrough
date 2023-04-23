import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { AttractionDetail } from "pages/attractionDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/attraction/museum" element={<AttractionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
