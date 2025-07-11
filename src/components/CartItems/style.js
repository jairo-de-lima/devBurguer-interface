import styled from 'styled-components';

export const ProductImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.purple};
    border: none;

    &:hover {
      background-color: ${(props) => props.theme.secondDarkPurple};
    }
  }
`;

export const EmptyCart = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
  font-weight: bold;
`;

export const TrashImage = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
