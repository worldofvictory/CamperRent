import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  // outline: 2px solid tomato;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  } 

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }    

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Header = styled.header`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: var(--lines-background-color);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

export const Link = styled(NavLink)`
  padding-top: 24px;
  padding-bottom: 24px;
  text-decoration: none;
  color: var(--primary-text);
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

 

    &.active {
      color: var(--accent-color);
    }

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  
`;

export const LogoAccent = styled.span`
  color: var(--button-color);
`;