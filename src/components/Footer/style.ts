import styled from 'styled-components';

export const Container = styled.footer`
  margin: auto;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 90%;
  gap: 16px;
  align-items: center;
  margin-bottom: 40px;

  .footer__text {
    max-width: 500px;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white_200};
  }
`;
