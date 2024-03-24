import { PiWind } from "react-icons/pi";
import  returnDetailsItem  from "../../helpers/returnDetailsItem";
import sprite from "../../../assets/sprite.svg";
import { DetailsList } from "../../AdvertCard/AdvertCard.styled";
import {
  FeatureReviewsWrap,
  DetailsItemsWrap,
  VehicleDetailsWrap,
  VehicleDetailsList,
} from "./Features.styled";

const Features = ({
  card: {
    airConditioner,
    toilet,
    kitchen,
    microwave,
    shower,
    freezer,
    TV,
    hob,
    CD,
    beds,
    radio,
    gas,
    water,
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}) => {
  return (
    <FeatureReviewsWrap>
      <DetailsItemsWrap>
        <DetailsList>
          <li>
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg> {`${adults} adults`}
          </li>

          <li className="capitalize">
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
            {transmission}
          </li>

          {returnDetailsItem(
            airConditioner,
            "AC",
            <PiWind
              width={20}
              height={20}
              style={{ fill: "var(--text-color)" }}
            />
          )}

          <li className="capitalize">
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
            {engine}
          </li>

          {returnDetailsItem(
            kitchen,
            "kitchen",
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
          )}

          <li>
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
            {`${beds} beds`}
          </li>

          <li>
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
            {`${airConditioner} air conditioner`}
          </li>

          {returnDetailsItem(CD, "CD", <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>)}
          {returnDetailsItem(
            radio,
            "Radio",
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
          )}
          {returnDetailsItem(TV, "TV", <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>)}
          {returnDetailsItem(
            hob,
            `${hob} hob`,
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
          )}
          {returnDetailsItem(
            shower,
            `${shower} shower`,
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
          )}
          {returnDetailsItem(
            freezer,
            `${freezer} freezer`,
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
          )}
          {returnDetailsItem(
            toilet,
            `${toilet} toilet`,
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
          )}
          {returnDetailsItem(
            microwave,
            `${microwave} microwave`,
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
          )}
          {returnDetailsItem(gas, gas, <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>)}
          {returnDetailsItem(
            water,
            water,
            <svg width={16} height={16}>
                     <use href={`${sprite}#icon-star`}></use>
                     </svg>
          )}
        </DetailsList>
      </DetailsItemsWrap>

      <VehicleDetailsWrap>
        <h3>Vehicle details</h3>
        <hr />
        <VehicleDetailsList>
          <li className="capitalize">
            <p>Form</p>
            <p>
              {form === "alcove"
                ? form
                : `${form.slice(0, 5)} ${form.slice(5)}`}
            </p>
          </li>

          <li>
            <p>Length</p>
            <p>{length}</p>
          </li>

          <li>
            <p>Width</p>
            <p>{width}</p>
          </li>

          <li>
            <p>Height</p>
            <p>{height}</p>
          </li>

          <li>
            <p>Tank</p>
            <p>{tank}</p>
          </li>

          <li>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </VehicleDetailsList>
      </VehicleDetailsWrap>
    </FeatureReviewsWrap>
  );
};

export default Features;