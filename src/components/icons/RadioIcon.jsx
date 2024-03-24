import sprite from "../../assets/sprite.svg";

const RadioIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-radio`}></use>
    </svg>
  );
};

export default RadioIcon;
