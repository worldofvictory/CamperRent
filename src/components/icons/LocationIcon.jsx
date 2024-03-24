import sprite from "../../assets/sprite.svg";

const LocationIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height} stroke={null}>
      <use href={`${sprite}#icon-pin`}></use>
    </svg>
  );
};

export default LocationIcon;
