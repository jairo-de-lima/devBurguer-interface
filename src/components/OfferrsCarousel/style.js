import styled from 'styled-components';

export const Container = styled.div`
  .carousel-item {
    padding: 20px;
  }

  overflow-x: hidden;

  padding: 40px;
  .react-multiple-carousel__arrow--left {
    left: 15px;
    top: 80px;
  }
  .react-multiple-carousel__arrow--right {
    top: 80px;
  }

  .react-multiple-carousel-list {
    overflow: visible;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 800;
  color: ${(props) => props.theme.gren};
  padding-bottom: 20px;
  position: relative;
  text-align: center;
  margin-bottom: 80px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${(props) => props.theme.gren};
    left: calc(50% - 28px);
  }
`;
