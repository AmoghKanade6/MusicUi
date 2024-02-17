/* eslint-disable react/prop-types */
import pause from "../assets/Pause Button.png";
const MusicCrad = ({ profile }) => {
  return (
    <>
      <div className="music-profile p1">
        <div className="music-list">
          <img className="pro" key={profile[0].id} src={profile[0].src} />
          <div className="titles">
            <span>{profile[0].title}</span>
            <h3>{profile[0].song}</h3>
          </div>
          <img className="lines" key={profile[0].id} src={profile[0].lines} />
          <img className="pause" key={profile[0].id} src={pause} />
        </div>
      </div>
      <div className="music-profile-row p2">
        <div className="music-profile ">
          <div className="music-list">
            <img className="pro" key={profile[1].id} src={profile[1].src} />
            <div className="titles">
              <span>{profile[1].title}</span>
              <h3>{profile[1].song}</h3>
            </div>
            <img className="lines" key={profile[1].id} src={profile[1].lines} />
            <img className="pause" key={profile[1].id} src={pause} />
          </div>
        </div>
        <div className="music-profile">
          <div className="music-list">
            <img className="pro" key={profile[2].id} src={profile[2].src} />
            <div className="titles">
              <span>{profile[2].title}</span>
              <h3>{profile[2].song}</h3>
            </div>
            <img className="lines" key={profile[2].id} src={profile[2].lines} />
            <img className="pause" key={profile[2].id} src={pause} />
          </div>
        </div>
      </div>
      <div className="music-profile p3">
        <div className="music-list">
          <img className="pro" key={profile[3].id} src={profile[3].src} />
          <div className="titles">
            <span>{profile[3].title}</span>
            <h3>{profile[3].song}</h3>
          </div>
          <img className="lines" key={profile[3].id} src={profile[3].lines} />
          <img className="pause" key={profile[3].id} src={pause} />
        </div>
      </div>
      <div className="music-profile p4">
        <div className="music-list">
          <img className="pro" key={profile[4].id} src={profile[4].src} />
          <div className="titles">
            <span>{profile[4].title}</span>
            <h3>{profile[4].song}</h3>
          </div>
          <img className="lines" key={profile[3].id} src={profile[3].lines} />
          <img className="pause" key={profile[4].id} src={pause} />
        </div>
      </div>
    </>
  );
};

export default MusicCrad;
