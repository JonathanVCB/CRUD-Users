import { DivContainer, FormModal, HeaderModal, SectionModal } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ContactsContext,
  iUpdateContactProps,
} from "../../contexts/ContactContext";
import { useContext } from "react";

interface ModalContactProps {
  contactId: string;
}

const ModalEditContact = ({ contactId }: ModalContactProps) => {
  const { UpdateContact, CloseModal } = useContext(ContactsContext);

  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Email inválido"),
    telephone: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateContactProps>({
    resolver: yupResolver(formSchema),
  });

  return (
    <SectionModal>
      <DivContainer>
        <HeaderModal>
          <h6>Cadastrar Contato</h6>
          <button onClick={CloseModal}>X</button>
        </HeaderModal>
        <FormModal
          onSubmit={handleSubmit((data) => UpdateContact(data, contactId))}
        >
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

          <button type="submit">Atualizar Contato</button>
        </FormModal>
      </DivContainer>
    </SectionModal>
  );
};

export default ModalEditContact;
