import sprite from "../../assets/sprite.svg";

const FavIcon = ({ width, height }) => {
  return (
    <svg id="fav-icon" width={width} height={height}>
      <use href={`${sprite}#icon-fav`}></use>
    </svg>
  );
};

export default FavIcon;
