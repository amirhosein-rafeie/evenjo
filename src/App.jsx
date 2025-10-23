import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Footer from "./Pages/Footer.jsx";
// import Shows from "./Pages/Shows.jsx";
// import Concerts from "./Pages/Concerts.jsx";
// import Sports from "./Pages/Sports.jsx";
// import Festivals from "./Pages/Festivals.jsx";
// import Login from "./Pages/Login.jsx";
// import SignUp from "./Pages/SignUp.jsx";
// import ForgetPassW from "./Pages/ForgetPassW.jsx";
// import Sms from "./Pages/Sms.jsx"

function App() {
  return (<Router> <NavBar />
    <div>  <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/shows" element={<Shows />} />
      <Route path="/concerts" element={<Concerts />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/festivals" element={<Festivals />} /> */}
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
