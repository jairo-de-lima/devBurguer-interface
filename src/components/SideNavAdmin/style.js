import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.black};

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border-bottom: 1px solid #625e5e;
  }

  img {
    width: 60%;
    margin: 40px 0;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const NavLink = styled(Link)`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  color: ${(props) => props.theme.white};
  border-radius: 10px;
  background-color: ${(props) =>
    props.$isActive ? props.theme.purple : 'transparent'};

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
`;
