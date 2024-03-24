import styled from "styled-components";
import { commonInputStyles } from "../../Tab/Book/Book.styled";

export const LocationPart = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  font-weight: 500;
  color: var(--light-text);

  svg {
    position: absolute;
    top: 45px;
    left: 15px;
    fill: none;
    z-index: 1;
    fill: none;
    stroke: var(--secondary-text);
  }

  .react-dropdown-select {
    ${commonInputStyles}
    padding: 15px;
    padding-left: 40px;
    opacity: 1;
    color: var(--light-text);
    transition: box-shadow var(--linear-transition);
    background-color: var(--grey);
    

    input {
      color: var(--light-text);

      &::placeholder {
        color: var(--light-text);
        opacity: 0.5;
      }
    }

    &:focus-within {
      box-shadow: 0 0 5px var(--accent-red);
    }

    svg {
      display: none;
    }
  }

  .react-dropdown-select-dropdown {
    width: 100%;
    background-color: var(--grey);
    border-radius: 10px;
    border: 2px solid var(--accent-red);
  }

  .react-dropdown-select-item {
    border-bottom: 1px solid var(--light-text);

    &:hover:not(.react-dropdown-select-item-selected) {
      color: var(--white);
      opacity: 0.7;
    }
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    color: var(--white);
    font-weight: bold;
    background-color: var(--accent-red);
  }
`;

