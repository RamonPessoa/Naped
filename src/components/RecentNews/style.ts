import styled from 'styled-components';

export const Container = styled.section`
  margin: auto;
  margin-top: 99px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  max-width: 1120px;
  width: 90%;
  .recents {
    .recents__title {
      font-size: 2.4rem;
      font-weight: 400;
    }

    .recents__divider {
      max-width: 250px;
      height: 3px;
      width: 100%;
    }

    .recents__list {
      display: grid;
      gap: 52px;
      grid-template-columns: repeat(auto-fit, minmax(338px, 1fr));

      .list__item {
        .banner {
          height: 250px;
          .banner__text {
            padding: 0 20px 10px 15px;
          }
          .picture .image__tag {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 2px 16px;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
