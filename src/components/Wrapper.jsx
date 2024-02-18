/* eslint-disable react/prop-types */
import pause from "../assets/Pause Button.png";

const Wrapper = ({ id, profileData, extraClass, isClass }) => {
  return (
    <div key={id} className={`music-profile ${isClass ? extraClass : null}`}>
      <div className="music-list">
        <img className="pro" src={profileData.src} />
        <div className="titles">
          <span>{profileData.title}</span>
          <h3>{profileData.song}</h3>
        </div>
        <img className="lines" key={profileData.id} src={profileData.lines} />
        <img className="pause" key={profileData.id} src={pause} />
      </div>
    </div>
  );
};

export default Wrapper;
