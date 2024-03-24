
import { FilterAll, FormFilters, ButtonsWrap } from "./Filter.styled";
import React, { useState, useRef } from "react";
import { gerAllSearchParams } from "../helpers/gerAllSearchParams";
import LocationFilter from "../Filter/Location/Location";
import EquipmentFilter from "../Filter/Equipment/Equipment";
import TypeFilter from "../Filter/VenicleType/VenicleType";

const FiltersForm = ({ setPage, searchParams, setSearchParams }) => {
const [filterParams, setFilterParams] = useState({});
const checkbox = useRef(null);
const dropdownRef = useRef(null);
const params = {searchParams};
gerAllSearchParams(searchParams, params);
const handleFilterAdverts = (e) => {
      e.preventDefault();
      setSearchParams({});
      setPage(1);
      console.log("Filter parameters:", filterParams); 
      setSearchParams({ ...filterParams });
    };
const handleFilterChange = (name, value) => {
      setFilterParams((prev) => ({ ...prev, [name]: value }));
  };
const resetFilters = () => {
      [...checkbox.current?.elements].forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = false;
      }
      });

    dropdownRef.current?.clearAll();
    setSearchParams({});
    setFilterParams({});
  };

  return (
      <FormFilters onSubmit={handleFilterAdverts} ref={checkbox}>
          
      <LocationFilter
        setLocationFilter={(value) => handleFilterChange("location", value)}
              />
          <FilterAll>      
    <EquipmentFilter
       setEquipmentFilter={(value) => handleFilterChange("equipment", value)}
      />
    <TypeFilter
         setTypeFilter={(value) => handleFilterChange("type", value)}
      />
    <ButtonsWrap>
        <button type="submit">Search</button>
        <button
          id="reset-button"
          type="button"
          aria-label="Reset filter fields"
          onClick={resetFilters}
        >
          Reset
        </button>
              </ButtonsWrap>
              </FilterAll> 
    </FormFilters>
  );
};

export default FiltersForm;