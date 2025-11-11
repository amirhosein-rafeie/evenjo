import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./pages/Home/NavBar.jsx";
import Home from "./pages/Home/home.jsx";
import ConcertList from "./pages/Concert/ConcertList.jsx";
import SportList from "./pages/Sport/SportList.jsx";
import Login from "./pages/Login/Login.jsx";
import ForgetPassW from "./pages/Login/ForgetPassW.jsx";
import SignUp from "./pages/Login/SignUp.jsx";
import ResetPassword from "./pages/Login/ResetPassword.jsx";
import VerifyCode from "./pages/Login/VerifyCode.jsx";
import TeamPage from "./pages/OurTeam/TeamPage.jsx";
import Footer from "./pages/Home/Footer.jsx";

const FAQ = lazy(() => import("./components/Faq.jsx"));

const LazyWrapper = ({ children }) => (
  <Suspense
    fallback={
      <div style={{
        width: "100%", height: "100vh", background: "#0c0c0c", color: "#fff",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        Loading...
      </div>
    }
  >
    {children}
  </Suspense>
);

function App() {
  return (
    <Router>
      <NavBar />

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

      <LazyWrapper>
        <FAQ />
        <Footer />
      </LazyWrapper>
    </Router>
  );
}

export default App;
