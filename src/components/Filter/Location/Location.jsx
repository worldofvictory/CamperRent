import React from "react";
import Select from "react-dropdown-select";
import { LOCATION_OPTIONS } from "../../helpers/Location" 
import { LocationIcon } from "../../../components/icons";
import {LocationPart} from "./Location.styled"
    
const LocationFilter = ({ setLocationFilter }) => {
  

  return (
    <div>
      <LocationPart>
        Location
        <Select
        placeholder="Kyiv, Ukraine"
        options={LOCATION_OPTIONS}
        onChange={(arr) => {
            if (arr.length > 0) {
              setLocationFilter(arr[0].value);
            }
          }}
          closeOnScroll={true}
          color="var(--accent-red)"
        />
       <LocationIcon width={20} height={20} />
      </LocationPart>
    </div>
  );
};

export default LocationFilter;
