import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Form } from "../../components/Form/style";
import { DivGoRegister, Main, SectionLogin } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext, iLoginProps } from "../../contexts/UserContext";

const LoginPage = () => {
  const { Login, isLogged } = useContext(AuthContext);

  isLogged();

  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginProps>({
    resolver: yupResolver(formSchema),
  });

  return (
    <SectionLogin>
      <Main>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(Login)}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <button type="submit">Entrar</button>
        </Form>
        <DivGoRegister>
          <Link to="/register">Cadastre-se</Link>
        </DivGoRegister>
      </Main>
    </SectionLogin>
  );
};

export default LoginPage;
