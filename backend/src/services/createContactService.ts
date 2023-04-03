import { User } from './../entities/userEntitie';
import { Contact } from './../entities/contactEntities';
import { IUser, IUserRequest } from './../interfaces/users/index';
import AppDataSource from "../data-source";
import { Apperror } from "../errors/appError";


const createContactService = async (userData: IUserRequest, user: any): Promise<IUser> => {
    const ContactRepository = AppDataSource.getRepository(Contact);
    const userRepository = AppDataSource.getRepository(User);
  
    const userOwner = await userRepository.findOneBy({
        id: user.id
    })
  
    const contact = ContactRepository.create({...userData, user:userOwner});
    await ContactRepository.save(contact);
  
  
    return contact;
  };
  
  export default createContactService;