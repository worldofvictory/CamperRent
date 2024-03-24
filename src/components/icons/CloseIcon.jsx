import sprite from "../../assets/sprite.svg";

const CloseIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-close`}></use>
    </svg>
  );
};

export default CloseIcon;
