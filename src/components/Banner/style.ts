import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  :hover {
    cursor: pointer;
    ::after {
      box-shadow: none;
    }

    .image {
      transform: scale(1.05);
    }

    p {
      transform: scale(1.01);
    }
  }
  .picture {
    position: absolute;
  }

  p {
    z-index: 1;
    transition: 0.5s;
  }
`;
