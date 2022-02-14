import styled from 'styled-components';
import highlight1 from '@public/highlight1.png';

export const Container = styled.section`
  max-width: 1120px;
  width: 90%;
  margin: auto;
  display: grid;
  margin-top: 80px;
  height: 350px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;

  .banner {
    display: flex;
    align-items: flex-end;
    padding: 15px 30px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right, left;
    box-shadow: 0px -150px 50px -110px
      ${({ theme }) => theme.colors.body_Background} inset;
  }

  .banner--larger {
    background-image: url(${highlight1.src});
    grid-row: 1/3;
    font-size: 2.4rem;
  }
  .banner--smaller {
    background-image: url(${highlight1.src});
    font-size: 1.3rem;
  }
`;
