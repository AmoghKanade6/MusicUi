/* eslint-disable react/prop-types */

import Wrapper from "./Wrapper";
import { profileMusic } from "../iconsList";

const MusicCrad = () => {
  return (
    <>
      <Wrapper
        id={crypto.randomUUID()}
        profileData={profileMusic[0]}
        extraClass={"p1"}
        isClass={true}
      />
      <div className="music-profile-row p2">
        <Wrapper
          id={crypto.randomUUID()}
          profileData={profileMusic[1]}
          isClass={false}
        />
        <Wrapper
          id={crypto.randomUUID()}
          profileData={profileMusic[2]}
          isClass={false}
        />
      </div>
      <Wrapper
        id={crypto.randomUUID()}
        profileData={profileMusic[3]}
        extraClass={"p3"}
        isClass={true}
      />
      <Wrapper
        id={crypto.randomUUID()}
        profileData={profileMusic[4]}
        extraClass={"p4"}
        isClass={true}
      />
    </>
  );
};

export default MusicCrad;
