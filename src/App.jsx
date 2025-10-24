import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Home/NavBar.jsx";
import Home from "./pages/Home/home.jsx";
import Footer from "./pages/Home/Footer.jsx";
import ConcertList from "./pages/Concert/ConcertList.jsx";
import SportList from "./pages/Sport/SportList.jsx";

// import Shows from "./Pages/Shows.jsx";
// import Concerts from "./Pages/Concerts.jsx";
// import Sports from "./Pages/Sports.jsx";
// import Festivals from "./Pages/Festivals.jsx";
// import Login from "./Pages/Login.jsx";
// import SignUp from "./Pages/SignUp.jsx";
// import ForgetPassW from "./Pages/ForgetPassW.jsx";
// import Sms from "./Pages/Sms.jsx"

function App() {
  return (
    <Router>
      {" "}
      <NavBar />
      <div>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concerts" element={<ConcertList />} />
          <Route path="/sports" element={<SportList />} />
          <Route path="/shows" element={<ConcertList />} />
          <Route path="/festivals" element={<SportList />} />
          {/* <Route path="/login" element={<Login />} />
      <Route path="/forget" element={<ForgetPassW />} />
      <Route path="/sms" element={<Sms />} />
      <Route path="/signup" element={<SignUp />} />  */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
