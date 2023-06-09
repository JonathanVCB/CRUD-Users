import { Contact } from "./../entities/contactEntities";
import AppDataSource from "../data-source";
import { Apperror } from "../errors/appError";
import { IUserUpdate } from "./../interfaces/users/index";

const updatedContactService = async (
  userData: IUserUpdate,
  contactIdParams: string
): Promise<object> => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({
    id: contactIdParams,
  });

  console.log(userData);

  if (!findContact) {
    throw new Apperror("user not exist", 404);
  }

  const updatedUser = contactRepository.create({
    ...findContact,
    ...userData,
  });

  await contactRepository.save(updatedUser);

  return updatedUser;
};

export default updatedContactService;
