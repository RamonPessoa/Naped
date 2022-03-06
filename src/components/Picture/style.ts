import styled from 'styled-components';

type MyProps = {
  image: string;
};

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  .image__tag {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.purple_light};
  }

  .image {
    background: url(${({ image }: MyProps) => image});
    background-size: cover;
    height: 100%;
    background-position: center;
    transition: 0.5s;
  }

  ::after {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0px -150px 50px -110px
      ${({ theme }) => theme.colors.body_Background} inset;
    transition: 0.5s;
  }
`;
