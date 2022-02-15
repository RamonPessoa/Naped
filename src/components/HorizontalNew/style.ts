import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 18px;
  .view {
    width: 200px;
    height: 151px;
    overflow: hidden;
    .view__picture {
      .image__tag {
        top: 10px;
        left: 10px;
        padding: 1px 14px;
        font-size: 1rem;
      }
    }
    :hover {
      cursor: pointer;
      .view__picture {
        .image {
          transform: scale(1.05);
        }
      }
    }
  }
  .horizontalNew__content {
    max-width: 394px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .content__title {
      font-size: 1.5rem;
      font-weight: 400;
    }
    .content__text {
      color: ${({ theme }) => theme.colors.white_200};
      font-size: 1.3rem;
    }
    .content__date {
      color: ${({ theme }) => theme.colors.white_200};
      font-size: 1.1rem;
    }
    .content__button {
      color: ${({ theme }) => theme.colors.default_font_color};
      font-size: 1.3rem;
      height: 25px;
      padding: 3px 22px;
      align-self: flex-start;
      background: ${({ theme }) => theme.colors.purple_light};
      border-radius: 3px;
      font-weight: 600;
      border: none;
    }
  }
`;
