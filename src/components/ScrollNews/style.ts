import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  width: 90%;
  margin: auto;
  margin-top: 50px;
  height: 884px;
  .scrollArea {
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding-right: 139px;
    overflow-y: scroll;
  }
`;
