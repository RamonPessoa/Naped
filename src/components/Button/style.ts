import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 30px;
  font-size: 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.purple_light};
  background: transparent;
  overflow: hidden;

  a {
    padding: 5px 20px;
    display: block;
  }
`;
