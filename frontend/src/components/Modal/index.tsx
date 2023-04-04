import { DivContainer, FormModal, HeaderModal, SectionModal } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  iRegisterContactProps,
  ContactsContext,
} from "../../contexts/ContactContext";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const ModalAddContact = () => {
  const { RegisterContact } = useContext(ContactsContext);
  const { CloseModal } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    telephone: yup.string().required("Telefone obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterContactProps>({
    resolver: yupResolver(formSchema),
  });

  return (
    <SectionModal>
      <DivContainer>
        <HeaderModal>
          <h6>Cadastrar Contato</h6>
          <button onClick={CloseModal}>X</button>
        </HeaderModal>
        <FormModal onSubmit={handleSubmit(RegisterContact)}>
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

          <button type="submit">Cadastrar Tecnologia</button>
        </FormModal>
      </DivContainer>
    </SectionModal>
  );
};

export default ModalAddContact;
