import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1130px;
  width: 90%;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  button {
    background: black;
  }

  .newsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(338px, 338px));
    grid-template-rows: repeat(4, 250px);
    grid-auto-flow: column;
    gap: 40px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
      height: 0;
    }

    .newsList__item {
      max-width: 338px;
      .banner {
        width: 338px;
        height: 250px;
        .banner__text {
          padding: 0 20px 10px 15px;
        }
      }
    }
  }

  .pagination {
    display: flex;
    gap: 8px;

    button {
      border: none;
      border-radius: 3px;
      font-size: 1.6rem;
      padding: 6px 10px;
      font-weight: 600;
      background-color: ${({ theme }) => theme.colors.grey_200};
      :hover {
        cursor: pointer;
      }
    }

    .button--active {
      border: 1px solid ${({ theme }) => theme.colors.purple_light};
      color: ${({ theme }) => theme.colors.purple_light};
    }
  }
`;
