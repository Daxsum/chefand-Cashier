import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CashHome from "./components/chashier/home";
import ChefHome from "./components/chef/home";
import LandingPage from "./components/landingPage";
import LoginCashier from "./components/chashier/loginCashier";
import LoginChef from "./components/chef/loginChef";
import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  return (
    <div className="flex">
      <Routes>
        <Route exact:true path="/" element={<LandingPage />} />
        <Route
          path="/loginCashier"
          element={
            <LoginCashier
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/loginChef"
          element={
            <LoginChef
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route
          path="/chefhome"
          element={<ChefHome currentUser={currentUser} />}
        />
        <Route
          path="/cashhome"
          element={<CashHome currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
