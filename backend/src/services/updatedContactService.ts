import { Contact } from "./../entities/contactEntities";
import AppDataSource from "../data-source";
import { Apperror } from "../errors/appError";
import { IUserUpdate } from "./../interfaces/users/index";

const updatedContactService = async (
  userData: IUserUpdate,
  contactIdParams: string,
  user: any
): Promise<object> => {
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

  const updatedUser = contactRepository.create({
    ...findContact,
    ...userData,
  });

  await contactRepository.save(updatedUser);

  return updatedUser;
};

export default updatedContactService;
