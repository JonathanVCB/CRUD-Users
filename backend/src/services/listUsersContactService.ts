import { IUser } from "./../interfaces/users/index";
import AppDataSource from "../data-source";
import { User } from "../entities/userEntitie";

const listUsersContactService = async (user: any): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.findOne({
    where: {
      id: user.id,
    },
    relations:{
        contacts: true
    }
  });

  return users;
};

export default listUsersContactService;
