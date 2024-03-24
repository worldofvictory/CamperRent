import styled, { css } from "styled-components";

export const InputWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 2 * 10px) / 3);
  height: 85px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 4 * 10px) / 5);
    height: 95px;
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 2 * 10px) / 3);
    height: 95px;
  }

  input {
    width: 130px;
    height: 80px;
    padding: 15px;
    position: absolute;
    opacity: 0;
    cursor: pointer;
    pointer-events: all;

    &:checked + div {
      border-color: var(--accent-red);
    }
  }
`;
export const LabelFilters = styled.label`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
  color: var(--text-color);
  pointer-events: none;
  align-items: center;

  hr {
    opacity: 0.3;
    background-color: var(--border-color);
    display: block;
    margin: 24px 0;
  }
`;

export const Title = styled.h2`
  height: 48px;
  margin-top: 35px;
  margin-bottom: 24px;
  //border-bottom: 1px solid rgba(16, 24, 40, 0.1);
`;
export const FieldSet = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  border: none;
  padding: 0;
`;

export const TypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 10px;
`;

export const TypeItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(16, 24, 40, 0.2);
  border-radius: 10px;
  height: 95px;
  width: calc((100% - 30px) / 3);
`;


export const TextIcon = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
`;

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
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
    padding: 17px;
  }
`;

export const RadioBtn = styled.div`
  ${commonRadioCheckbox}

  svg {
    fill: var(--secondary-text);
    stroke: var(--secondary-text);
    padding-bottom:10px;
  }
`;