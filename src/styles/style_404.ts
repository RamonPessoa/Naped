import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  width: 90%;
  display: flex;
  margin: auto;
  justify-content: space-between;
  margin-top: 182px;
  .error__left {
    max-width: 495px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 17px;
    h1 {
      font-size: 4.8rem;
      font-weight: 400;
    }
  }
  p {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.white_200};
  }
  .error__right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 44px;

    p {
      max-width: 298px;
      text-align: center;
    }
  }
`;
