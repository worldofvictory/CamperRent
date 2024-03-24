import sprite from "../../assets/sprite.svg";

const TVIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-tv`}></use>
    </svg>
  );
};

export default TVIcon;
