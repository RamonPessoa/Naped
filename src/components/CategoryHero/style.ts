import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1120px;
  margin: auto;
  margin-top: 90px;
  width: 90%;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    box-shadow: 100px 0px 100px -10px ${({ theme }) =>
        theme.colors.body_Background} inset;
  }

  .categoryHero__image {
    width: 100%;
    height: 300px;
    background: url(${({ image }: { image: string | undefined }) => image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .categoryHero__content {
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 15px;
    top: 83px;
    left: 40px;
    z-index: 1;
    .categoryHero__title {
      font-size: 4.8rem;
    }

    .categoryHero__slogan {
      color: ${({ theme }) => theme.colors.white_200};
      font-size: 2rem;
    }
  }
`;
