import sprite from "../../assets/sprite.svg";

const ConditionerIcon = ({ width, height }) => {
  return (
    <svg id="fav-icon" width={width} height={height}>
      <use href={`${sprite}#icon-conditioner`}></use>
    </svg>
  );
};

export default ConditionerIcon;
