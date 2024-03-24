import sprite from "../../assets/sprite.svg";

const KitchenIcon = ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${sprite}#icon-kitchen`}></use>
    </svg>
  );
};

export default KitchenIcon;
