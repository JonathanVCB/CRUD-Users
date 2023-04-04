import { Link } from "react-router-dom";
import { DivBio, DivAdd, Header, MainContain, ListTechs } from "./style";
import { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

import CardContacts from "../../components/CardContacts";
import ModalAddContact from "../../components/Modal";

const HomePage = () => {
  const { user, contacts, ModalShow, showModal, DeleteUser } =
    useContext(AuthContext);

  function Clear(): void {
    window.localStorage.clear();
  }

  return (
    <>
      <Header>
        <Link onClick={Clear} to="/login">
          Sair
        </Link>
        <h2 onClick={() => user && DeleteUser(user.id)}>Deletar Conta</h2>
      </Header>
      <DivBio>
        <h1>Olá, {user?.name}</h1>
      </DivBio>
      <DivAdd>
        <h2>Contatos</h2>
        <button onClick={ModalShow}>Adicionar</button>
      </DivAdd>
      <MainContain>
        <ListTechs>
          {contacts?.map((contact) => (
            <CardContacts key={contact.id} contact={contact} />
          ))}
        </ListTechs>
        {showModal && <ModalAddContact />}
      </MainContain>
    </>
  );
};

export default HomePage;
