import styled, { css } from "styled-components";



export const RedButtonStyles = css`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.08px;
  max-width: 140px;
  border-radius: 200px;
  padding: 16px 60px;
  background-color: var(--button-color);
  color: var(--text-button);
  line-height: 1.5;


  @media screen and (min-width: 1440px) {
    font-size: 16px;
    max-width: 173px;
    min-height: 56px;
    letter-spacing: -0.01em;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
      background-color: var(--hover-button);
    }
  }
`;

export const Container = styled.div`
  width: 360px;
  height: 167px;
`;

export const FormFilters = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 30px;
`;

export const FilterAll = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--light-text);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-top: 30px;

  button {
    ${RedButtonStyles}
    width: 150px;
    

    @media screen and (min-width: 1440px) {
      margin: unset;
    }
  }

  #reset-button {
    background-color: var(--grey);
    color: var(--light-text);
    width: 150px;

    @media screen and (min-width: 1440px) {
      &:hover,
      &:focus {
        background-color: var(--input-background);
        color: var(--light-text);
      }
    }
  }
`;