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

export const Register = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('Email é obrigatório!'),
      email: yup
        .string()
        .email('Digite um E-mail valido!')
        .required('Email é obrigatório!'),
      password: yup
        .string()
        .min(6, 'A senha deve conter pelo menos 6 caracteres!')
        .required('Senha é obrigatória!'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('conta criada com sucesso');
      } else if (status === 409) {
        toast.error('email ja cadastrado! faca login pra continuar!');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Falha no sistema tente novamente!');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={logo} alt="logo-devburguer" />
      </LeftContainer>
      <RightContainer>
        <Title>Criar conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor="name"> Nome</label>
            <input type="name" {...register('name')} />
            <p> {errors?.name?.message} </p>
          </InputContainer>
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
          <InputContainer>
            <label htmlFor="confirmPassword"> Confirmar senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p> {errors?.name?.message} </p>
          </InputContainer>

          <Button type="submit"> Criar Conta </Button>
        </Form>
        <p>
          Ja possui conta? <Link to="/login">Clique aqui </Link>{' '}
        </p>
      </RightContainer>
    </Container>
  );
};
