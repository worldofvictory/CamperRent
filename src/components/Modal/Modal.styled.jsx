import styled, {css} from "styled-components";
import {keyframes} from "styled-components";

const TitlesStyles = css`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`; 
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const CLoseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    stroke: var(--primary-text);
    transition: stroke var(--transition);
  }

  @media screen and (min-width: 1440px) {
    top: 40px;
    right: 40px;

    &:hover svg,
    &:focus svg {
      stroke: var(--button-color);
    }
  }
`;
export const ModalBackdrop = styled.div`
  position: fixed;
  padding-top: 50px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
 
  background-color: rgba(9, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${({ isShown }) => (isShown ? fadeIn : fadeOut)} 0.3s ease-in-out; 
`;

export const Window = styled.div`
  position: relative;
  width: 100%;
  justify-content: center;
  border-radius: 18px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
   
  overflow-y: auto;
  z-index: 5;
  max-height: 85vh;
 
  
  &::-webkit-scrollbar {
    width: 12px;
   border-radius: 50px;
    
  
  }
  &::-webkit-scrollbar-thumb {
  background-color: var(--button-color); 
  margin: 25px 0;
  height:2px;
}
`;

export const PicsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 200px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      width: calc(100% / 3);
      min-height: 300px;
    }
  }
  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    align-self: stretch;

    @media screen and (min-width: 768px) {
    }
  }
`;

export const ModalContainer = styled.div`

  width: 100%;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1272px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: var(--light-text);
`;

export const Title = styled.p`
  ${TitlesStyles}
  margin-bottom: 5px;
`;
