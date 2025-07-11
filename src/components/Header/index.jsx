import {
  Container,
  HeaderLink,
  LinkContainer,
  Navigation,
  Options,
  Profile,
  Logout,
  Content,
} from './styles';
import { UserCheck, Basket } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  const { pathname } = useResolvedPath();

  function LogoutUser() {
    logout();
    navigate('/login');
  }

  return (
    <Container>
      <Content>
        <Navigation>
          <div>
            <HeaderLink to="/" $isActive={pathname === '/'}>
              Home
            </HeaderLink>
            <hr />
            <HeaderLink to="/cardapio" $isActive={pathname === '/cardapio'}>
              Cardapio
            </HeaderLink>
          </div>
        </Navigation>
        <Options>
          <Profile>
            <UserCheck color="${(props) => props.theme.white}" size={24} />
            <div>
              <p>
                Ola, <span> {userInfo.name} </span>{' '}
              </p>
              <Logout onClick={LogoutUser}>Sair</Logout>
            </div>
          </Profile>
          <LinkContainer>
            <Basket color="${(props) => props.theme.white}" size={24} />
            <HeaderLink to="/carrinho">Carrinho</HeaderLink>
          </LinkContainer>
        </Options>
      </Content>
    </Container>
  );
}
