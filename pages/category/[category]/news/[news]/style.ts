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
  h1,
  .news__date {
    line-height: 55px;
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 400;
  }

  h4 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  .thumb {
    background: url(${({ image }: MyProps) => image});
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 450px;
    margin-top: 12px;
  }

  .news__date,
  h4,
  p {
    color: ${({ theme }) => theme.colors.white_200};
  }

  .news__article {
    p {
      margin-top: 43px;
    }
  }
`;
