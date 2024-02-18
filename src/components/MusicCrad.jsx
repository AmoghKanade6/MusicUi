/* eslint-disable react/prop-types */

import Wrapper from "./Wrapper";
import { profileMusic, rowData } from "../iconsList";

const MusicCrad = () => {
  return (
    <>
      {profileMusic?.slice(0, 1)?.map((music, id) => (
        <Wrapper profileData={music} key={id} />
      ))}
      <div className="music-profile-row p2">
        {rowData?.map((music, id) => (
          <Wrapper profileData={music} key={id} />
        ))}
      </div>
      {profileMusic?.slice(1, 3)?.map((music, id) => (
        <Wrapper profileData={music} key={id} />
      ))}
    </>
  );
};

export default MusicCrad;
