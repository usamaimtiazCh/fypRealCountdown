// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./App.css";
import { Footer } from "./Components/NavComponents/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/NavComponents/header";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/Authentications/signup";
import Login from "./Pages/Authentications/login";
import { ContactUs } from "./Pages/ContactUs";
import Agents from "./Pages/Agents";
import Properties from "./Pages/Properties";
import AgentDashboard from "./Pages/AgentDashboard";
import BuyerDashboard from "./Pages/BuyerDashboard";
import SellerDashboard from "./Pages/SellerDashboard";
import { PricingPlans } from "./Components/Payments/plans";

function App() {
  return (
    <div className="bg-gray-50">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="Contact-Us" element={<ContactUs />} />
            <Route path="Agents" element={<Agents />} />
            <Route path="Properties" element={<Properties />} />
            <Route path="AgentDashboard" element={<AgentDashboard />} />
            <Route path="BuyerDashboard" element={<BuyerDashboard />} />
            <Route path="SellerDashboard" element={<SellerDashboard />} />
            <Route path="pricing/:id" element={<PricingPlans />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
