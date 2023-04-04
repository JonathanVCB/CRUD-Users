import { DivBack, MainReg, SectionRegister } from "./style";
import { Link } from "react-router-dom";
import { Form } from "../../components/Form/style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext, iRegisterProps } from "../../contexts/UserContext";

const RegisterPage = () => {
  const { RegisterUser } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    telephone: yup.string().required("Telefone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterProps>({
    resolver: yupResolver(formSchema),
  });

  return (
    <SectionRegister>
      <DivBack>
        <Link to="/login">Voltar</Link>
      </DivBack>
      <MainReg>
        <h1>Registro</h1>
        <Form onSubmit={handleSubmit(RegisterUser)}>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor="telephone">Telephone</label>
          <input
            id="telephone"
            type="telephone"
            placeholder="Digite aqui seu telefone"
            {...register("telephone")}
          />
          {errors.telephone && <span>{errors.telephone.message}</span>}

          <button type="submit">Cadastrar</button>
        </Form>
      </MainReg>
    </SectionRegister>
  );
};
export default RegisterPage;
