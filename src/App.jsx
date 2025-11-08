import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./pages/Home/NavBar.jsx";
import Home from "./pages/Home/home.jsx";
import ConcertList from "./pages/Concert/ConcertList.jsx";
import SportList from "./pages/Sport/SportList.jsx";
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
      </Routes>

      <LazyWrapper>
        <FAQ />
        <Footer />
      </LazyWrapper>
    </Router>
  );
}

export default App;
