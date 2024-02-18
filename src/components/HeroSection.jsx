import bgImg from "../assets/white musical note making sound.png";
import musicImg from "../assets/Render.mp4";
import Card from "./Card";
import { iconsList } from "../iconsList";
import MusicCrad from "./MusicCrad";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="left">
        <img className="bg-img" src={bgImg} />
        <h3 className="title1">Where</h3>
        <h1 className="title2">Music</h1>
        <h5 className="title3">finds its home</h5>
        <p className="desc">
          Explore, Listen and discover <br />
          your sound
        </p>
        <Card iconsL={iconsList} />
      </div>
      <div className="right">
        <video className="music-img" autoPlay loop muted>
          <source src={musicImg} type="video/mp4" />
        </video>
        <div className="music-cards">
          <MusicCrad />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
