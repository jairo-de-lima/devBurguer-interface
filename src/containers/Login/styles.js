import styled from 'styled-components';
import backgroundLogin from '../../assets/backgroundLogin.png';
import background from '../../assets/background.png';
import { Link as ReactLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background: url('${backgroundLogin}');
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  img {
    width: 60%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: url('${background}');
  background-size: cover;
  background-color: #1e1e1e;

  height: 100%;
  width: 100%;
  max-width: 50%;

  p {
    color: ${(props) => props.theme.white};
    font-size: 1.2rem;
    font-weight: bold;

    a {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.white};
  font-size: 2rem;

  span {
    color: ${(props) => props.theme.purple};
    font-size: 2.5rem;
    font-family: 'Road Rage', sans-serif;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  padding: 1.2rem;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 100%;

  input {
    border: none;
    height: 1rem;
    border-radius: 5px;
    padding: 1rem;
  }
  label {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${(props) => props.theme.white};
  }
  p {
    font-size: 14px;
    line-height: 80%;
    color: ${(props) => props.theme.darkRed};
    font-weight: 600;
    height: 10px;
  }
`;

export const Link = styled(ReactLink)`
  text-decoration: none;
  color: ${(props) => props.theme.white};
`;
