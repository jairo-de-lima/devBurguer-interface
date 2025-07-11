import logo from '../../assets/logo.svg';

import { CartItems, CartResume } from '../../components';
import { Banner, Container, Title, Content } from './style';

export function Cart() {
  return (
    <Container>
      <Banner>
        <img src={logo} alt="logo devBurguer" />
      </Banner>
      <Title> Checkout - Pedidos</Title>
      <Content>
        <CartItems />
        <CartResume />
      </Content>
    </Container>
  );
}
