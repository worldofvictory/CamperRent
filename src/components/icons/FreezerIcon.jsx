import sprite from "../../assets/sprite.svg";

const FreezerIcon = ({ width, height }) => {
  return (
    <svg id="fav-icon" width={width} height={height}>
      <use href={`${sprite}#icon-freezer`}></use>
    </svg>
  );
};

export default FreezerIcon;
