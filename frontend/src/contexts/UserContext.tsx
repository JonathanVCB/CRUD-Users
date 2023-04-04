import { createContext, ReactNode, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/axios";

interface iUserProviderProps {
  children: ReactNode;
}

export interface iLoginProps {
  email: string;
}
export interface iRegisterProps {
  name: string;
  email: string;
  telephone: string;
}

export interface iUserLogin {
  id: string;
  name: string;
  email: string;
  telephone: string;
  createdAt: Date;
  contacts: iContact[];
}

interface iUser {
  user: iUserLogin;
  token: string;
}
export interface iContact {
  id: string;
  name: string;
  email: string;
  telephone: string;
  createdAt: Date;
}

interface iUserValues {
  Login: (user: iLoginProps) => void;
  user: iUserLogin | null;
  setUser: React.Dispatch<React.SetStateAction<iUserLogin | null>>;
  RegisterUser: (data: iRegisterProps) => void;
  contacts: iContact[];
  showModal: boolean;
  ModalShow: () => void;
  CloseModal: () => void;
  isLogged: () => void;
  DeleteUser: (id: string) => void;
}

export const AuthContext = createContext<iUserValues>({} as iUserValues);

function UserProvider({ children }: iUserProviderProps) {
  const [user, setUser] = useState<iUserLogin | null>(null);
  const [contacts, setContacts] = useState<iContact[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contactLoading, setContactLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function LoadUser(): Promise<void> {
      const token = localStorage.getItem("@token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get<iUserLogin>("users");
          setUser(data);

          setContacts(data.contacts);
        } catch (error) {
          console.error(error);
          window.localStorage.clear();
        } finally {
          setContactLoading(false);
        }
      }
    }
    LoadUser();
  }, [contactLoading]);

  function isLogged(): void {
    const token = localStorage.getItem("@token");
    if (token) {
      navigate("/home", { replace: true });
    }
  }

  async function Login(user: iLoginProps): Promise<void> {
    try {
      const { data } = await api.post<iUser>("login", user);

      setUser(data.user);
      setContacts(data.user.contacts);

      window.localStorage.setItem("@token", data.token);
      toast.success("Logado com sucesso");

      const toNavigate = location.state?.from?.pathname || "/home";
      navigate(toNavigate, { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  }

  async function RegisterUser(data: iRegisterProps): Promise<void> {
    try {
      await api.post("users", data);
      toast.success("Registrado com sucesso");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  }

  async function DeleteUser(id: string): Promise<void> {
    try {
      await api.delete(`users/${id}`);
      toast.success("Registrado com sucesso");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  }

  function ModalShow(): void {
    setShowModal(true);
  }

  function CloseModal(): void {
    setShowModal(false);
  }

  return (
    <AuthContext.Provider
      value={{
        Login,
        user,
        setUser,
        RegisterUser,
        contacts,
        showModal,
        ModalShow,
        CloseModal,
        isLogged,
        DeleteUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default UserProvider;
