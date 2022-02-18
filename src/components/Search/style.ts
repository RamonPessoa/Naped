import styled from 'styled-components';

export const StyledInput = styled.section`
  position: relative;
  margin: auto;
  margin-top: 42px;
  display: flex;
  max-width: 1120px;
  width: 90%;
  input {
    /* position: absolute; */
    width: 100%;
    background-color: ${({ theme }) => theme.colors.grey_200};
    outline: none;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white_200};
    padding: 17px 0 18px 25px;
    border: none;
  }

  .search__icon {
    position: absolute;
    right: 28px;
    top: 18px;
  }
`;
