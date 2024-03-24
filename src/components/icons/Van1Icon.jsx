import sprite from "../../assets/sprite.svg";

const Van1Icon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-van1`}></use>
    </svg>
  );
};

export default Van1Icon;
