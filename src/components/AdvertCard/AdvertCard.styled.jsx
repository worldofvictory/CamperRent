import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const TitlesStyles = css`
  color: var(--primary-text);
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const FlexAlign = css`
  display: flex;
  align-items: center;
`;

export const AdvertsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;

  @media screen and (min-width: 1440px) {
    width: 95%;
    margin-left: auto;
  }
`;

export const CardItem = styled.li`
  ${FlexAlign}
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  border-radius: 20px;
  border: 2px solid var(--grey);
  padding: 15px;
  background-color: var(--text-button);

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
  }
`;
export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  max-width: 100%;

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const VanPic = styled.div`
  min-width: 100%;
  min-height: 100%;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    min-width: 50%;
  }

  @media screen and (min-width: 1440px) {
    min-width: 30%;
    max-width: 30%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const TitlePriceWrap = styled.div`
  ${FlexAlign}
  justify-content: space-between;
  gap: 24px;
  
`;

export const Title = styled.p`
  ${TitlesStyles}
  margin-bottom: 5px;
   color: var(--secondary-text);
`;

export const PriceWrap = styled.div`
  ${FlexAlign}
  gap: 8px;
  color: var(--secondary-text);
`;

export const AddToFavBtn = styled.button`
  svg {
    fill: ${({ $isFavorite }) =>
      $isFavorite ? "var(--button-color)" : "transparent"};
    stroke: ${({ $isFavorite }) =>
      $isFavorite ? "none" : "var(--secondary-text)"};
    transition: fill var(--transition);
  }

  @media screen and (min-width: 1440px) {
    &:hover svg {
      fill: ${({ $isFavorite }) =>
        $isFavorite ? "transparent" : "var(--button-color)"};
      stroke: ${({ $isFavorite }) =>
        $isFavorite ? "var(--primary-text)" : "var(--button-color)"};
    }
  }
`;

export const Price = styled.p`
  ${TitlesStyles}
  color: var(--secondary-text);
`;

export const RatingLocationWrap = styled.div`
  ${FlexAlign}
  gap: 16px;
  color: var(--secondary-text);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;

  @media screen and (min-width: 1440px) {
    margin-top: -25px;
  }
`;

export const RatingWrap = styled.div`
  ${FlexAlign}
  gap: 5px;

  p {
    text-decoration: underline;
    color: var(--secondary-text);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const LocationWrap = styled.div`
  ${FlexAlign}
  gap: 5px;

  svg {
    fill: none;
    stroke: var(--secondary-text);
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: var(--primary-text);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const DetailsList = styled.ul`
  ${FlexAlign}
  flex-wrap: wrap;
  gap: 8px;

  li {
    ${FlexAlign}
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 100px;
    padding: 10px 20px;
    color: var(--secondary-text);
    background-color: var(--grey);

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      padding: 12px 24px;
    }

  svg {
      stroke: var(--secondary-text);
    }  
  }
`;

export const LoadMoreBtn = styled.button`
  display: block;
  border-radius: 200px;
  border: 1px solid var(--primary-text);
  padding: 16px 32px;
  margin: 10px auto;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.08px;
  color: var(--secondary-text);
  transition: border-color var(--transition);

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      border-color: var(--hover-button);
    }
  }
`;

export const RedButtonStyles = css`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.08px;
  max-width: 140px;
  border-radius: 200px;
  padding: 16px;
  background-color: var(--button-color);
  color: var(--text-button);

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    max-width: 166px;
    min-height: 56px;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
      background-color: var(--hover-button);
    }
  }
`;
export const ShowBtn = styled.button`
  ${RedButtonStyles}
`;
//
export const ListBtnWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    gap: 50px;
  }
`;























//
export const GoToCatalogLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  color: var(--accent-red);
`;