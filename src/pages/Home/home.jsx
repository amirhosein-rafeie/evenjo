import { lazy, Suspense } from "react";
import "../../index.css";
import { ThemeProvider } from "@mui/material/styles";
import darkTheme from "./darkTheme.js";

const HomePage = lazy(() => import("./HomePage.jsx"));
const ConcertSection = lazy(() => import("./ConcertSection.jsx"));
const SportSection = lazy(() => import("../../pages/Home/SportSection.jsx"));
const Ability = lazy(() => import("../Home/Ability.jsx"));
const TopSingerSlider = lazy(() => import("../Home/TopSingerSlider.jsx"));
const CommentSlider = lazy(() => import("../Home/CommentSlider.jsx"));
const Footer = lazy(() => import("../Home/Footer.jsx"));

const Loading = () => (
  <div style={{
    width: "100%", height: "100vh", background: "#0c0c0c", color: "#fff",
    display: "flex", justifyContent: "center", alignItems: "center"
  }}>
    loading...
  </div>
);

const Home = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={darkTheme}>
        <HomePage />
        <ConcertSection />
        <SportSection />
        <TopSingerSlider />
        <Ability />
        <CommentSlider />
        <Footer />
      </ThemeProvider>
    </Suspense>
  );
};

export default Home;
