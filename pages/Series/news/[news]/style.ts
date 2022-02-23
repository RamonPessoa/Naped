import styled from 'styled-components';

type MyProps = {
  image?: string;
};

export const Container = styled.section`
  max-width: 1120px;
  width: 90%;
  margin: auto;
  padding-top: 89px;

  h4,
  h1 {
    line-height: 55px;
  }

  .thumb {
    background: url(${({ image }: MyProps) => image});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 450px;
  }
  p,
  h4 {
    color: ${({ theme }) => theme.colors.white_200};
  }
`;
