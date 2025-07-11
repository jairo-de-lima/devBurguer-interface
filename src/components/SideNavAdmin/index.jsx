import { navLinks } from './navLinks';
import Logo from '../../assets/logo.svg';
import { Container, Footer, NavLink, NavLinkContainer } from './style';
import { SignOut } from '@phosphor-icons/react';
import { useUser } from '../../hooks/UserContext';
import { useResolvedPath } from 'react-router-dom';

export function SideNavAdmin() {
  const { logout } = useUser();
  const { pathname } = useResolvedPath();

  return (
    <Container>
      <div className="image">
        <img src={Logo} alt="Hamburguer logo devburguer" />
      </div>

      <NavLinkContainer>
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.path}
            $isActive={pathname === link.path}
          >
            {link.icon}
            <span> {link.label}</span>
          </NavLink>
        ))}
      </NavLinkContainer>
      <Footer>
        <NavLink to={'/login'} onClick={logout}>
          <SignOut />
          <span>Sair</span>
        </NavLink>
      </Footer>
    </Container>
  );
}
