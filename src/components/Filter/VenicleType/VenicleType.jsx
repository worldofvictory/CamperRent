import { LabelFilters, InputWrap, FieldSet, Title,  RadioBtn } from "./VenicleType.styled";
import {
  Van1Icon,
  Van2Icon,
  Van3Icon,
} from "../../icons";
const filterType = [
  {
    value: "panelTruck",
    icon:  Van1Icon,
    text: "Van",
  },
  {
    value: "fullyIntegrated",
    icon: Van2Icon,
    text: "Fully Integrated",
  },
  {
    value: "alcove",
    icon: Van3Icon,
    text: "Alcove",
  },
];

const VehicleType = ({ setTypeFilter }) => {
  return (
    <LabelFilters>
      <Title>Vehicle type</Title>
          <hr />
          <FieldSet>
          {filterType.map(({ value, text, icon: Icon }, i) => (
        <InputWrap key={`${text}/${i}`}>
          <input
            type="radio"
            name="type"
            value={value}
            onChange={({ target }) => setTypeFilter(target.value)}
                  />
                  <RadioBtn>
                      <Icon width={40} height={28} /> {text}
                </RadioBtn>
          </InputWrap>
          ))}
              </FieldSet>
    </LabelFilters>
  );
};

export default VehicleType;