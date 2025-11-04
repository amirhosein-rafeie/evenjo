import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Home/NavBar.jsx";
import Home from "./pages/Home/home.jsx";
import Footer from "./pages/Home/Footer.jsx";
import ConcertList from "./pages/Concert/ConcertList.jsx";
import SportList from "./pages/Sport/SportList.jsx";
import FAQ from "./components/Faq.jsx";
import Login from "./pages/Login/Login.jsx";
import SignUp from "./pages/Login/SignUp.jsx";
import ForgetPassW from "../src/pages/Login/ForgetPassW.jsx"
import ResetPassword from "../src/pages/Login/ResetPassword.jsx"
import VerifyCode from "../src/pages/Login/VerifyCode.jsx"
import Popup from "./components/common/Popup.jsx";
import TeamPage from "./pages/TeamPage.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Popup />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concerts" element={<ConcertList />} />
          <Route path="/sports" element={<SportList />} />
          <Route path="/shows" element={<SportList />} />
          <Route path="/festivals" element={<ConcertList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgetPassW />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/our-team" element={<TeamPage />} />
        </Routes>
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
