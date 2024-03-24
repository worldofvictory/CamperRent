import sprite from "../../assets/sprite.svg";

const ToiletIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-toilet`}></use>
    </svg>
  );
};

export default ToiletIcon;
