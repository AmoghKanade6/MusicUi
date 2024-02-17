import bgImg from "../assets/white musical note making sound.png";
import musicImg from "../assets/musicbeats.png";
import Card from "./Card";
import { iconsList, profileMusic } from "../iconsList";
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
        <img className="music-img" src={musicImg} />
        <div className="music-cards">
          <MusicCrad profile={profileMusic} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
