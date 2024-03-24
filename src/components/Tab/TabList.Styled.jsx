import styled from "styled-components";
export const TabsWrap = styled.div`
  hr {
    opacity: 0.3;
    background-color: var(--primary-text);
  }
`;

export const TabsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  li button {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: var(--primary-text);
    transition: color var(--transition);

    @media screen and (min-width: 1440px) {
      &:hover,
      &:focus {
        color: var(--button-color);
      }
    }

    &.active::after {
      position: absolute;
      top: 30.5px;
      display: block;
      content: "";
      width: 100%;
      height: 3px;
      background-color: var(--button-color);
    }
  }
`;

export const RenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

