import React from "react";
import { PiWind } from "react-icons/pi";
import { CheckBox } from "./Equipment.styled";
import {LabelFilters, InputWrap, FieldSet, Title } from "../VenicleType/VenicleType.styled"
import {
  KitchenIcon,
  ShowerIcon,
  TVIcon,
  TransmissionIcon, 
} from "../../icons";

const equipment = [
  {
    name: "airConditioner",
    value: "1",
    icon: PiWind,
    text: "AC",
  },
  {
    name: "transmission",
    value: "automatic",
    icon: KitchenIcon,
    text: "Automatic",
  },
  {
    name: "kitchen",
    value: "1",
    icon: ShowerIcon,
    text: "Kitchen",
  },
  {
    name: "TV",
    value: "1",
    icon: TVIcon,
    text: "TV",
  },
  {
    name: "shower",
    value: "1",
    icon: TransmissionIcon,
    text: "Shower/WC",
  },
];



const EquipmentFilter = ({ setEquipmentFilter }) => {
  return (
    <LabelFilters>
          <Title>Vehicle equipment</Title>
          <hr />
          <FieldSet>
      {equipment.map(({ name, value, text, icon: Icon }, i) => (
        <InputWrap key={`${text}/${i}`}>
          <input
            type="checkbox"
            name={name}
            value={value}
            onChange={({ target }) => setEquipmentFilter(target.value)}
          />
          <CheckBox>
               <Icon width={32} height={32} size={32} /> {text}
              </CheckBox>
             </InputWrap>
      ))}
    </FieldSet>
    </LabelFilters>
  );
};

export default EquipmentFilter;