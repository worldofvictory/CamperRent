import sprite from "../../assets/sprite.svg";

const BedIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-bedroom`}></use>
    </svg>
  );
};

export default BedIcon;
