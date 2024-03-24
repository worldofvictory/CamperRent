import sprite from "../../assets/sprite.svg";

const AdultsIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height} >
      <use href={`${sprite}#icon-adults`}></use>
    </svg>
  );
};

export default AdultsIcon;
