import { Card, DivDelete } from "./style";
import del from "../../assets/delete.png";
import { useContext } from "react";
import { iContact } from "../../contexts/UserContext";
import { ContactsContext } from "../../contexts/ContactContext";
import ModalEditContact from "../ModalEditContact";

interface CardTechProps {
  contact: iContact;
}

const CardTech = ({ contact }: CardTechProps) => {
  const { DeleteContact, showContactModal, ModalShow } =
    useContext(ContactsContext);

  return (
    <Card>
      <h5>{contact.name}</h5>
      <p>{contact.email}</p>
      <p>{contact.telephone}</p>
      <DivDelete>
        <img
          src={del}
          alt="deletar"
          onClick={() => DeleteContact(contact.id)}
        />
        <p onClick={ModalShow}>EDITAR</p>
      </DivDelete>
      {showContactModal && <ModalEditContact contactId={contact.id} />}
    </Card>
  );
};

export default CardTech;
