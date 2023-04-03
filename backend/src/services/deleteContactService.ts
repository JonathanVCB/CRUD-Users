import { Contact } from './../entities/contactEntities';
import AppDataSource from "../data-source";
import { Apperror } from "../errors/appError";

const deleteContactService = async (contactIdParams: string, user: any) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({
    id: contactIdParams,
  });

  if (!findContact) {
    throw new Apperror("user not exist", 404);
  }
  if (findContact.user !== user.id) {
    throw new Apperror("Not Authorized", 401);
  }

  await contactRepository.delete({id: contactIdParams})



  return {};
};

export default deleteContactService;
