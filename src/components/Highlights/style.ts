import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  width: 90%;
  margin: auto;
  display: grid;
  margin-top: 80px;
  height: 350px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(524px, 2fr) minmax(240px, 1fr)
  );
  gap: 20px;

  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: 0.5s;
  }

  .banner--larger {
    grid-row: 1/3;
    .picture .image__tag {
      padding: 4px 18px;
      font-size: 1.4rem;
      top: 17px;
      left: 30px;
    }
    .banner__text {
      font-size: 2.4rem;
      padding: 15px 30px;
      bottom: 15px;
    }
  }
  .banner--smaller {
    font-size: 1.3rem;
    .picture .image__tag {
      padding: 2px 16px;
      font-size: 1.4rem;
      top: 10px;
      left: 10px;
      font-size: 1.2rem;
    }

    .banner__text {
      padding: 0 20px 10px 15px;
      font-size: 1.3rem;
    }
  }
`;
