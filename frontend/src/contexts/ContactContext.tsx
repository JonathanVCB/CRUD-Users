import { createContext, ReactNode, useState } from "react";
import { api } from "../services/axios";
import { toast } from "react-toastify";

export const ContactsContext = createContext<iContactsValues>(
  {} as iContactsValues
);

interface iContactsProviderProps {
  children: ReactNode;
}

export interface iRegisterContactProps {
  name: string;
  email: string;
  telephone: string;
  createdAt: Date;
}
export interface iUpdateContactProps {
  name?: string;
  email?: string;
  telephone?: string;
}
interface iContactsValues {
  RegisterContact: (data: iRegisterContactProps) => void;
  DeleteContact: (id: string) => void;
  UpdateContact: (data: iUpdateContactProps, id: string) => void;
  ModalShow: () => void;
  CloseModal: () => void;
  showContactModal: boolean;
}

function ContactsProvider({ children }: iContactsProviderProps) {
  const [showContactModal, setShowContactModal] = useState<boolean>(false);

  async function RegisterContact(data: iRegisterContactProps): Promise<void> {
    const token = localStorage.getItem("@token");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post("contact", data);
      toast.success("Registrado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  }

  async function DeleteContact(id: string): Promise<void> {
    try {
      await api.delete(`contact/${id}`);
      toast.success("Deletado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    } finally {
      window.location.reload();
    }
  }
  async function UpdateContact(
    data: iUpdateContactProps,
    contactId: string
  ): Promise<void> {
    if (data.email === "") {
      delete data.email;
    }
    if (data.name === "") {
      delete data.name;
    }
    if (data.telephone === "") {
      delete data.telephone;
    }
    try {
      await api.patch(`contact/${contactId}`, data);
      toast.success("Atualizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    } finally {
      window.location.reload();
    }
  }

  function ModalShow(): void {
    setShowContactModal(true);
  }

  function CloseModal(): void {
    setShowContactModal(false);
  }

  return (
    <ContactsContext.Provider
      value={{
        RegisterContact,
        DeleteContact,
        UpdateContact,
        ModalShow,
        CloseModal,
        showContactModal,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export default ContactsProvider;
