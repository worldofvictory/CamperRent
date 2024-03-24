import sprite from "../../assets/sprite.svg";

const WaterIcon = ({ width, height }) => {
  return (
    <svg id="fav-icon" width={width} height={height}>
      <use href={`${sprite}#icon-water`}></use>
    </svg>
  );
};

export default WaterIcon;
