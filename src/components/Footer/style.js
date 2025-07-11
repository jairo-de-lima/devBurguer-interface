import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  background-color: #562669;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: ${(props) => props.theme.white};
    font-size: 14px;
    font-weight: lighter;
  }
`;
