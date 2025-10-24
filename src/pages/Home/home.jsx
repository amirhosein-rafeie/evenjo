// Home.jsx
import React from "react";

import "../../index.css";
import ConcertSection from "./ConcertSection.jsx";
import SportSection from "../../pages/Home/SportSection.jsx";
import HomePage from "./HomePage.jsx";

const Home = () => {
  return (
    <div>
      <HomePage />
      <ConcertSection />
      <SportSection />
    </div>
  );
};

export default Home;
