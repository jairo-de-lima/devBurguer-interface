import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import {
  Container,
  LeftContainer,
  RightContainer,
  InputContainer,
  Title,
  Form,
  Link,
} from './styles';
import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

export const Login = () => {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um E-mail valido!')
        .required('Email é obrigatório!'),
      password: yup
        .string()
        .min(6, 'A senha deve conter pelo menos 6 caracteres!')
        .required('Senha é obrigatória!'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,
      }),
      {
        pending: 'Verificando dados',
        success: {
          render() {
            setTimeout(() => {
              if (userData?.admin) {
                navigate('/admin/pedidos');
              } else {
                navigate('/');
              }
            }, 2000);
            return 'Seja bem vindo(a) 👌';
          },
        },
        error: 'Verifique seus dados 🤯',
      },
    );
    putUserData(userData);

    // localStorage.setItem('token', token);
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer! </span>
          <br />
          Acesse com seu <span>Login e senha. </span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="email"> Email</label>
            <input type="email" {...register('email')} />
            <p> {errors?.email?.message} </p>
          </InputContainer>
          <InputContainer>
            <label htmlFor="password"> Senha</label>
            <input type="password" {...register('password')} />
            <p> {errors?.password?.message} </p>
          </InputContainer>

          <Button type="submit"> Entrar </Button>
        </Form>
        <p>
          Não possui conta? <Link to="/cadastro">Clique aqui </Link>{' '}
        </p>
      </RightContainer>
    </Container>
  );
};
