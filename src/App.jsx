import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CashHome from "./components/chashier/home";
import ChefHome from "./components/chef/home";
import "./App.css";

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route path="/chefhome" element={<ChefHome />} />
        <Route path="/cashhome" element={<CashHome />} />
      </Routes>
    </div>
  );
}

export default App;
