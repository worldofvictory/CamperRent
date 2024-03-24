import sprite from "../../assets/sprite.svg";

const StarIcon = ({ width, height, fillColor }) => {
  return (
    <svg width={width} height={height} fill={fillColor} stroke={fillColor}>
      <use href={`${sprite}#icon-star`}></use>
    </svg>
  );
};

export default StarIcon;
