import { Button } from '../Button';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useCart } from '../../hooks/CartContext';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);

  const navigate = useNavigate();

  const { cartProducts, clearCart } = useCart();

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc;
    }, 0);

    setFinalPrice(sumAllItems);
  }, [cartProducts]);

  const submitOrder = async () => {
    const products = cartProducts.map((product) => {
      return {
        id: product.id,
        quantity: product.quantity,
        price: product.price,
      };
    });

    try {
      const { data } = await api.post('/create-payment-intent', { products });

      navigate('/checkout', {
        state: data,
      });
    } catch (err) {
      toast.error('Falha no sistema tente novamente!');
    }
  };

  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Items</p>
          <p className="items-price">{formatPrice(finalPrice)} </p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatPrice(deliveryTax)} </p>
        </div>

        <div className="container-bottom">
          <p>Total</p>
          <p>{formatPrice(finalPrice + deliveryTax)} </p>
        </div>
      </Container>

      <Button onClick={submitOrder}>Finalizar pedido</Button>
    </div>
  );
}
