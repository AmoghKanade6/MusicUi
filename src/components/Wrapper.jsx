/* eslint-disable react/prop-types */
import pause from "../assets/Pause Button.png";

const Wrapper = ({ profileData }) => {
  const { src, title, song, lines, extraClass, isClass } = profileData;
  return (
    <div
      key={profileData.id}
      className={`music-profile ${isClass ? extraClass : null}`}
    >
      <div className="music-list">
        <img className="pro" src={src} />
        <div className="titles">
          <span>{title}</span>
          <h3>{song}</h3>
        </div>
        <img className="lines" src={lines} />
        <img className="pause" src={pause} />
      </div>
    </div>
  );
};

export default Wrapper;
