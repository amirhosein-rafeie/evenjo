import "../../index.css";
import ConcertSection from "./ConcertSection.jsx";
import SportSection from "../../pages/Home/SportSection.jsx";
import HomePage from "./HomePage.jsx";
import Ability from "../Home/Ability.jsx";
import TopSingerSlider from "../Home/TopSingerSlider.jsx";
import CommentSlider from "../Home/CommentSlider.jsx";

const Home = () => {
  return (
    <div>
      <HomePage />
      <ConcertSection />
      <SportSection />
      <TopSingerSlider />
      <SportSection />
      <ConcertSection />
      <Ability />
      <CommentSlider />
    </div>
  );
};

export default Home;
