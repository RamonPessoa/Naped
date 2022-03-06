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

  .list__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    /* height: 1120px; */

    li {
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

  .list__buttons {
    display: flex;
    max-width: 300px;
    width: 100%;
    justify-content: center;
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
