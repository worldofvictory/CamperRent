import styled, { css } from "styled-components";

const commonRadioCheckbox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid var(--primary-text);
  padding: 10px;
  color: var(--text-color);
  cursor: pointer;
  pointer-events: all;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    padding: 17px;
  }
`;

export const CheckBox = styled.div`
  ${commonRadioCheckbox}
  
   svg {
    fill: var(--secondary-text);
    stroke: var(--secondary-text);
    padding-bottom:10px;
  }
`;