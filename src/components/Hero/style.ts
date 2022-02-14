import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 120px;
  margin: auto;
  max-width: 1120px;
  width: 90%;
  .content {
    max-width: 492px;
    width: 100%;
    .content__head {
      font-size: 4.8rem;
      max-width: 303px;
      width: 100%;
      font-weight: 400;
      line-height: 6rem;
    }
    .content__slogan {
      padding-top: 11px;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white_200};
      line-height: 3.2rem;
    }
  }
`;
