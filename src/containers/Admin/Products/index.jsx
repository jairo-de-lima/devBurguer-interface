import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Container, EditButton, ProductImage } from './styles';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CheckCircle, Pencil, XCircle } from '@phosphor-icons/react';
import { formatPrice } from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('/products');

      console.log(data);

      setProducts(data);
    }
    loadProducts();
  }, []);

  function editProduct(product) {
    navigate('/admin/editar-produto', { state: { product } });
  }

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome </TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">produto em Oferta</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell align="center">Editar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {product.name}
                </TableCell>
                <TableCell align="center">
                  {formatPrice(product.price)}
                </TableCell>
                <TableCell align="center">
                  {product.offer ? (
                    <CheckCircle size={28} color="#61a120" />
                  ) : (
                    <XCircle size={28} color="#ff3205" />
                  )}
                </TableCell>
                <TableCell align="center">
                  <ProductImage src={product.url} alt={product.name} />
                </TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => editProduct(product)}>
                    <Pencil />
                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
