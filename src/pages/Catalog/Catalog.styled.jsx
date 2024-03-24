import styled from '@emotion/styled';
export const ListBtnWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    gap: 50px;
  }
`;
export const NoItemsMsg = styled.div`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.25;
  text-align: center;
  color: var(--text-color);
  margin-top: 50px;

  &.favs {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px 0;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
