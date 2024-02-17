/* eslint-disable react/prop-types */

const Card = ({ iconsL }) => {
  return (
    <div className="card">
      <div className="icons-list">
        {iconsL?.map((icon) => (
          <img key={icon.id} className="icons" src={icon.src} />
        ))}
      </div>
    </div>
  );
};

export default Card;
