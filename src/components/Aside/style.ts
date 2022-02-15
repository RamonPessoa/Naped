import styled from 'styled-components';

export const Container = styled.aside`
  ul {
    display: flex;
    flex-direction: column;
    max-width: 338px;
    width: 100%;
    height: 884px;
    gap: 47px;
    li {
      .banner--aside {
        width: 338px;
        height: 250px;
        .banner__text {
          padding: 0 20px 10px 15px;
        }
        .image__tag {
          top: 10px;
          left: 10px;
          padding: 2px 16px;
          font-size: 1.2rem;
        }
      }
    }
  }
`;
